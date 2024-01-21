import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc  } from "firebase/firestore";
import { db } from "../../firebase/config";


/** getProjects
 *  @desc get array of projects from firestore db
 */
export const getProjects = createAsyncThunk( 'projects/getProjects', async ( payload, { rejectWithValue }) => {
    const docRef = doc(db, "user", "projects");
    const docSnap = await getDoc(docRef);

    let projects;
    if (docSnap.exists()) {
        projects = docSnap.data();
    } else {
        throw new Error("No data found.")
    }

    try {
        return projects.projectsList
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDocument } from "../../hooks/useDocuments"


/** getProjects
 *  @desc get array of projects from firestore db
 */
export const getProjects = createAsyncThunk( 'projects/getProjects', async ( payload, { rejectWithValue }) => {
    try {
        const projects = useDocument("user", "projects")
        console.log(projects)
        // let { data } = await httpsCallable(functions, "getImagekitKeys")()
        // const data = {}
        return ;
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})
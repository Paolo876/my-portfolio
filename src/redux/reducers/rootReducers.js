import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

/** authorizeToken
 *  @desc Runs on page init, authorizes the http-cookie token saved on browser if exists.
 */
export const authorizeToken = createAsyncThunk( 'root/authorizeToken', async ( payload, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_DOMAIN_URL}/api/auth/authorize`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
        return res.data;
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})
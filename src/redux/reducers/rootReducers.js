import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from '../../firebase/config';
import { httpsCallable } from 'firebase/functions';



/** getImageKeys
 *  @desc get imagekit-io keys { urlEndpoint, publicKey }
 */
export const getImageKeys = createAsyncThunk( 'root/getImageKeys', async ( payload, { rejectWithValue }) => {
    try {
        let { data } = await httpsCallable(functions, "getImagekitKeys")()
        return data;
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})


/** getEmailJSKeys
 *  @desc get emailJS keys { publicKey, serviceID, templateID }
 */
export const getEmailJSKeys = createAsyncThunk( 'root/getEmailJSKeys', async ( payload, { rejectWithValue }) => {
    try {
        let { data } = await httpsCallable(functions, "getEmailJSKeys")()
        return data;
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})
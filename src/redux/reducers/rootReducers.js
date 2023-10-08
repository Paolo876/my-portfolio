import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from '../../firebase/config';
import { httpsCallable } from 'firebase/functions';



/** getImageKeys
 *  @desc get imagekit-io keys { urlEndpoint, publicKeys }
 */
export const getImageKeys = createAsyncThunk( 'root/getImageKeys', async ( payload, { rejectWithValue }) => {
    try {
        const { data } = await httpsCallable(functions, "getImagekitKeys")()
        // const res = await axios.get(`${process.env.REACT_APP_DOMAIN_URL}/api/auth/authorize`, {
        //     headers: { 'Content-Type': 'application/json' },
        //     withCredentials: true,
        // });
        return data;
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})
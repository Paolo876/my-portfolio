import { createAsyncThunk } from "@reduxjs/toolkit";
import { functions } from '../../firebase/config';
import { httpsCallable } from 'firebase/functions';
import emailjs from '@emailjs/browser';

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
        
        if(data) {
            emailjs.init({
                publicKey: data.publicKey,
                limitRate: {
                    // Set the limit rate for the application
                    id: 'app',
                    // Allow 1 request per 10s
                    throttle: 10000,
                  },
            })
            return data;

        }
        return;
    } catch (err){
        return rejectWithValue(err.response.data)
    }
})
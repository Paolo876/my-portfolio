import { configureStore } from '@reduxjs/toolkit'; 
import rootSlice from './reducers/rootSlice';


const store = configureStore({
    reducer: {  
        root: rootSlice.reducer,
    }
});


export default store;
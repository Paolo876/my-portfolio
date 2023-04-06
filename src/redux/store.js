import { configureStore } from '@reduxjs/toolkit'; 
import rootSlice from './reducers/rootSlice';
import projectsSlice from './reducers/projectsSlice';

const store = configureStore({
    reducer: {  
        root: rootSlice.reducer,
        projects: projectsSlice.reducer,
    }
});


export default store;
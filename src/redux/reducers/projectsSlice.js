import { createSlice } from "@reduxjs/toolkit";
import { projectsInitialState } from "../initialStates";

const projectsSlice = createSlice({
    name: "projects",
    initialState: projectsInitialState,
    reducers: {
        setCurrentInView(state, { payload }){
            state.currentInView = payload;
        }
    }, 

});

export const projectsActions = projectsSlice.actions;
export default projectsSlice;
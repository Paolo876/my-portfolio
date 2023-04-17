import { createSlice } from "@reduxjs/toolkit";
import { rootInitialState } from "../initialStates";

const rootSlice = createSlice({
    name: "root",
    initialState: rootInitialState,
    reducers: {
        setData(state, { payload }){
            state.skillsList = payload.skills;
            state.otherSkillsList = payload.otherSkillsList;
            state.certifications = payload.certifications;
        }
    }
});

export const rootActions = rootSlice.actions;
export default rootSlice;
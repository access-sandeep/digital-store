import { createSlice } from "@reduxjs/toolkit";
import { ActionLoginDto, DispatchLogin } from "../shared/types";

const loginSlice = createSlice({
    name: "login",
    initialState: [],
    reducers: {
        //  Action functions
        postLogin: (state:Array<ActionLoginDto>, action:DispatchLogin) => {
            console.log(`Requesting login...`)
        },
        successActions: (state:Array<ActionLoginDto>, action:DispatchLogin) => {
            console.log("Response received for the Login request");
            console.log("State", state);
            console.log("Action", action);
        },
        errorActions: (state:Array<ActionLoginDto>, action:DispatchLogin) => {
            console.log("Error on success", action.payload);
        }
    }
});

export const {postLogin, successActions, errorActions} = loginSlice.actions;
export default loginSlice.reducer;

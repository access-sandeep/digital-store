import { createSlice } from "@reduxjs/toolkit";
import { AccessToken, DispatchLogin, FetchLoginAction } from "../shared/types";

const loginSlice = createSlice({
    name: "login",
    initialState: [],
    reducers: {
        //  Action functions
        postLogin: (state:Array<AccessToken>, action:DispatchLogin) => {
            console.log(`Requesting login...`)
        },
        successActions: (state:Array<AccessToken>, action:FetchLoginAction) => {
            state.push({
                access_token: action.payload.access_token
            });
        },
        errorActions: (state:Array<AccessToken>, action:DispatchLogin) => {
            console.log("Error on success", action.payload);
        }
    }
});

export const {postLogin, successActions, errorActions} = loginSlice.actions;
export default loginSlice.reducer;

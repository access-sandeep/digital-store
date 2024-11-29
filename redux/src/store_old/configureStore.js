import taskReducer from "./task";
import {
    configureStore
} from "@reduxjs/toolkit";
import http_request from "./middleware/api-requests";

const store = configureStore({
    reducer: {
        task: taskReducer
    },
    middleware: (getDefaultMiddleWare) => [...getDefaultMiddleWare(), http_request]
});

export default store;
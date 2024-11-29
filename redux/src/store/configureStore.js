import taskReducer from "./task";
import productsReducer from "./products";

import {
    configureStore
} from "@reduxjs/toolkit";
import http_request from "./middleware/api-requests";
import on_error from "./middleware/error";

const store = configureStore({
    reducer: {
        task: taskReducer,
        products: productsReducer
    },
    middleware:  (gDM) => gDM().concat(http_request, on_error)
});

export default store;
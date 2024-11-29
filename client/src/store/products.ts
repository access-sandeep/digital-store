import { createSlice } from "@reduxjs/toolkit";
import { ActionProduct, DispatchProduct, DispatchProducts } from "../shared/types";

let id = 0;
const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        //  Action functions
        addProduct: (state:Array<ActionProduct>, action:DispatchProduct) => {
            state.push({
                id: generateProductId().toString(),
                name: action.payload.data.name,
                sku: action.payload.data.sku,
                description: action.payload.data.description,
                short_description: action.payload.data.short_description,
                createddate: new Date(),
                updatedate: new Date()
            });
        },
        removeProduct: (state:any, action:DispatchProduct) => {
            const index = state.findIndex((product:ActionProduct) => product.id === action.payload.data.id);
            state.splice(index, 1)
        },
        updateProduct: (state:Array<ActionProduct>, action:DispatchProduct) => {
            const index = state.findIndex((product:ActionProduct) => product.id === action.payload.data.id);
            state[index].updatedate = new Date();
        },
        fetchProduct: (state:any, action:DispatchProduct) => {
            console.log("Fetch product called");
        },
        successActions: (state:Array<ActionProduct>, action:DispatchProducts) => {
            action.payload.forEach((product:any) => {
                state.push({
                    id: product.id,
                    name: product.name,
                    sku: product.sku,
                    description: product.description,
                    short_description: product.short_description,
                    createddate: product.createddate,
                    updatedate: product.updatedate
                });
            });
        },
        errorActions: (state, action) => {
            console.log("Error on success",action.payload);
        }
    }
});

const generateProductId = () => {
    return Date.now();
};

export const {addProduct, removeProduct, updateProduct, fetchProduct, successActions, errorActions} = productSlice.actions;
export default productSlice.reducer;

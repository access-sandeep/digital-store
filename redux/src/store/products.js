import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const productSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        //  Action functions
        addProduct: (state, action) => {
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
        removeProduct: (state, action) => {
            const index = state.findIndex((product) => product.id === action.payload.data.id);
            state.splice(index, 1)
        },
        updateProduct: (state, action) => {
            const index = state.findIndex((product) => product.id === action.payload.data.id);
            state[index].updatedate = new Date();
        },
        getProduct: (state, action) => {
            console.log("Fetch product called");
        },
        successActions: (state, action) => {
            action.payload.forEach((product) => {
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

export const {addProduct, removeProduct, updateProduct, getProduct, successActions, errorActions} = productSlice.actions;
export default productSlice.reducer;

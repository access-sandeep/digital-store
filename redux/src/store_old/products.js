import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        //  Action functions
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false,
            });
        },
        removeTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            state.splice(index, 1)
        },
        completedTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            state[index].completed = true;
        },
        pullData: (state, action) => {
            console.log("Pull Data is called!");
        },
        successActions: (state, action) => {
            action.payload.forEach(product => {
                state.push({
                    id: product.id,
                    task: product.name,
                    completed: false,
                });
            });
        },
        errorActions: (state, action) => {
            console.log("Error on success",action.payload);
        }
    }
});

// Fetch products from the server
export const fetchToDo = ()=> async (dispatch)=> {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    products.forEach(product => {
        dispatch(addTask({task: product.name}));
    });
};

export const {addTask, removeTask, completedTask, httpRequest, pullData} = taskSlice.actions;
export default taskSlice.reducer;

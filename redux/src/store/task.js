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
            const index = state.findIndex((task) => task.id === action.payload.id);
            state.splice(index, 1)
        },
        completedTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            state[index].completed = true;
        },
        successActions: (state, action) => {
            console.log("Action on success",action.payload);
            action.payload.forEach((product) => {
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

export const {addTask, removeTask, completedTask} = taskSlice.actions;
export default taskSlice.reducer;

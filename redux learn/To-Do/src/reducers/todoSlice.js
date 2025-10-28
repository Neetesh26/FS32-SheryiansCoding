import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: "todo",
    initialState:{
        todosList : []
    },
    reducers:{
        addTodos:(state, action)=>{
            state.todosList.push({id:Date.now(), data: action.payload, status:false})
        }
    }
})
export const {addTodos} = todoReducer.actions;
export default todoReducer.reducer;
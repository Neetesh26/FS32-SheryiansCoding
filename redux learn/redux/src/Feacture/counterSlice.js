import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name:"count",
    initialState : {
        count: 0 ,
        // date : Date.now()
    },
    reducers:{
        increment:(state,action)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
            if(state.count <= 0){
                state.count = 0
            }
        },
        reset:(state)=>{
            state.count = 0;
        },

    }
})

export default counter.reducer
export const { increment ,decrement ,reset} = counter.actions
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from '../feacture/AuthSlice'
export const store = configureStore({
    reducer :{
        users : AuthReducer
    }
})
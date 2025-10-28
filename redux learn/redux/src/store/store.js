import { configureStore } from "@reduxjs/toolkit"
import  countReducer  from "../Feacture/counterSlice";
export const store = configureStore({
  reducer:{
    counter : countReducer
  }
})
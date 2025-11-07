import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import errorReducer from "../features/ErrorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
  },
});

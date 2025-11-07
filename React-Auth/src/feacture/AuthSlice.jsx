import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
    name:"user",
    initialState:{
        user:null || JSON.parse(localStorage.getItem('isLoggedIn'))
    },
    reducers:{
        registerUser : (state , action)=>{
            state.user = action.payload
        },
        removeUser:(state)=>{
            localStorage.removeItem('isLoggedIn')
            state.user = null
        }
    }
})

export const { registerUser ,removeUser} = AuthReducer.actions
export default AuthReducer.reducer
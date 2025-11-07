import axios, { Axios } from "axios";
import { store } from "../store/Store";
import { useDispatch } from "react-redux";
import { setError } from "../features/ErrorSlice";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response)=>{
    return response;
  }
  ,(error)=>{
    const msg =error.status
    if(msg === 404){
      store.dispatch(setError("Something went wrong..."));
    }else{
      store.dispatch(setError("Invalid api"));
     
    }
    return Promise.reject(error);
  }

)

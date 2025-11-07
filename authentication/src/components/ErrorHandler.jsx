import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../features/ErrorSlice'
import { toast } from 'react-toastify'

const ErrorHandler = () => {
    const dispatch = useDispatch()
   const {message} =  useSelector((state)=>state.error)
// console.log(message);

   useEffect(()=>{
    if (message) {
    toast.error(message)
    dispatch(removeError())
   }else{

   }
   },[message])
  return null
}

export default ErrorHandler

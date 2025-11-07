import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

const ProtectedRoute = () => {
const navigate = useNavigate()
   const { user }= useSelector((state)=>state.users)
   
   console.log(user);
   
    if(!user){
        return navigate('/')
    }
  return <Outlet /> 
}

export default ProtectedRoute

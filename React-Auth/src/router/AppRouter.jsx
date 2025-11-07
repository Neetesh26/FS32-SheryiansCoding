import React from 'react'
import { createBrowserRouter } from 'react-router'
import AuthLayout from '../Layout/AuthLayout'
import { RouterProvider } from 'react-router/dom'
import ProtectedRoute from '../components/ProtectedRoute'
import HomeLayout from '../Layout/HomeLayout'
import HomePage from '../pages/HomePage'
import UsersPage from '../pages/UsersPage'

const AppRouter = () => {
    const router = createBrowserRouter([
       {
        path : '/',
        element: <AuthLayout />
       },
       {
        path:'/home',
        element: <ProtectedRoute />,
        children:[
            {
                path:'',
                element: <HomeLayout />,
                children:[
                    {
                        path:'',
                        element:<HomePage />
                    },
                    {
                        path:'users',
                        element:<UsersPage />
                    }
                ]
            }
        ]
       }
])
  return  <RouterProvider router={router} />
}

export default AppRouter

import React from 'react'
import Header from '../Headers/Headers'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-green-200'>

      <div className="sticky top-0 left-0 w-full bg-white shadow-md backdrop-blur-lg ">
      <Header />
      </div>
       
      <main className=" flex-grow container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

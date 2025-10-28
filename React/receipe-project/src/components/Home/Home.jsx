import React, { useContext, useEffect } from 'react'
import { Mystore } from '../context/Mycontext'
import Cards from '../Cards';

const Home = () => {
  const {receipe , setreceipe} = useContext(Mystore)
  // console.log(receipe);
  useEffect(()=>{
    !receipe.length && setreceipe(JSON.parse(localStorage.getItem('receipe')) || [])
  },[])
  localStorage.getItem('receipe') && !receipe.length && setreceipe(JSON.parse(localStorage.getItem('receipe')))
  return (
    <div className=" p-4 flex gap-4 flex-wrap justify-center">
      {receipe.length ? (
        receipe.map((elem, i) => {
          return <Cards key={i} elem={elem} />;
        })
      ) : (
        <div className="h-100 w-full flex justify-center items-center">
          <h1 className="text-4xl font-bold">No recipes added</h1>
        </div>
      )}
      
    </div>
  )
}

export default Home

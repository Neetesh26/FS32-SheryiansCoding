import React from 'react'

const AllTodos = ({data}) => {
    console.log(data);
    
  return (
    <div className='border-2 m-2 p-2 background-blue-200 '>
      <h3>{data.id}</h3>
      <h2>{data.data}</h2>
      <h2>{data.status}</h2>
    </div>
  )
}

export default AllTodos

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../reducers/todoSlice';
import AllTodos from './AllTodos';

const AddTodo = () => {
    const [inputData, setInputData] = useState("");
    // const [data , setData] = useState([]);
    const dispatch =useDispatch()
    const todo = useSelector((state)=> state.todo.todosList)
    

    const onchangeHandler =(e)=>{
        setInputData(e.target.value)
    }
    const AddTodosHandler =()=>{  
      dispatch(addTodos(inputData))
      // console.log(todo)
      // setInputData("")
    }
  return (
    <div>
       <div>
         <h1>Add Todos</h1>
        <input value={inputData} type="text" placeholder='Add Todos' onChange={onchangeHandler} />
        <button onClick={AddTodosHandler}>Add</button>
       </div>
       <div>
        {
          todo.map((elem , idx)=>{
            return (
                <AllTodos key={idx} data={elem}/>
            )
          })
        }
       </div>
    </div>
  )
}

export default AddTodo

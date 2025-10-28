import { Trash, X } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cards = ({elem}) => {
    console.log(elem);
    const navigate = useNavigate()

    const HandleClick = ()=>{
        navigate(`/receipeDetails/${elem.name}` , {state: elem})
    }
  return (
    <div  className=" bg min-h-[400px] w-[300px] hover:cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-3">
       {/* <div className="absolute right-0 top-0   bg-red-600 p-2 rounded-full">
        <X  className='h-[20px] w-[20px]'/>
        </div>  */}
      <div className='h-48 overflow-hidden rounded-xl bg-gray-200'>
        <img
        src={elem.image}
        alt={elem.name}
        className="w-full h-48 object-cover"
      />

      </div>
      <div className="p-3 ">
        <h2 className="text-2xl font-semibold text-gray-800">{elem.name}</h2>

        <p className="text-gray-600">
          <span className="font-medium text-gray-800">🕒 Cooking Time: </span> {elem.cookingTime} min
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">🧂 Ingredients: </span>{elem.ingredients}
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">🍳 Items: </span>{elem.items}
        </p>

      </div>

      <div className="bg-gray-50 text-center py-3 flex justify-center gap-2">
        <button onClick={HandleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
          View More
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white capitalize font-semibold py-2 px-4 rounded-lg transition duration-200">
          buy now
        </button>
      </div>
    </div>
  );
};



export default Cards

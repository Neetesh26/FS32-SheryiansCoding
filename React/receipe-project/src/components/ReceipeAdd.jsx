import React, { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { Mystore } from "./context/Mycontext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ReceipeAdd = () => {
  const navigate = useNavigate()
  // const [receipe , setreceipe] = useState([])
  const {receipe , setreceipe} = useContext(Mystore)
const { register, handleSubmit , reset} = useForm();


const handler= (data)=>{
  const updateRecipe = [...receipe , data]
setreceipe(updateRecipe)
localStorage.setItem('receipe' , JSON.stringify([...receipe , data]))
navigate('/')
toast.success('Recipe added successfully')
reset()
}
// console.log(receipe);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Add a New Recipe
      </h1>
      <form onSubmit={handleSubmit(handler)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Recipe Name
          </label>
          <input
          {...register('name',{required:true})}
            type="text"
            placeholder="Enter recipe name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Recipe Items */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Recipe Items
          </label>
          <textarea
          {...register('items',{required:true})}
            rows={3}
            placeholder="Describe the recipe steps"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
          {...register('ingredients',{required:true})}
            rows={3}
            placeholder="List ingredients"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Cooking Time */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Cooking Time (Minutes)
          </label>
          <input
          {...register('cookingTime',{required:true})}
            type="number"
            placeholder="e.g., 30"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Recipe Image
          </label>
          <input
          {...register('image')}
            type="url"
            placeholder="image url"
            accept="image/*"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReceipeAdd;

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ReceipeDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { name, ingredients, cookingTime, image , items} = location.state || {}

  return (
    <div>
     <div className="min-h-screen  py-10 px-4 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <button
            onClick={() => navigate('/')}
            className="text-sm hover:cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
          >
            ⬅ Back
          </button>
        </div>

        {/* Image Section */}
        <div className="rounded-xl overflow-hidden mb-6">
          <img
            src={image || "https://via.placeholder.com/400x250?text=Recipe+Image"}
            alt={name}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-4 ">
         <div className='flex justify-between items-center'>
           <p className="text-gray-700">
            <span className="font-semibold text-gray-800">🕒 Cooking Time:</span>{" "}
            {cookingTime} minutes
          </p>
           <p className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              🍽️ Serves: 2-4 people
            </p>
         </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🧂 Ingredients:
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {ingredients?.split(",").map((item, i) => (
                <li key={i}>{item.trim()}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🍳 Steps:
            </h2>
            <p className="text-gray-600 leading-relaxed">✅{items}</p>
          </div>
        </div> 

        {/* Footer */}
        <div className="text-center mt-8">
          <button
            onClick={() => alert("Let's start cooking! 👨‍🍳")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-200"
          >
            Start Cooking
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ReceipeDetails

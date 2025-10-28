import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Mystore } from "./context/Mycontext";

const ChiefAdd = () => {
  const navigate = useNavigate();
  let { register, handleSubmit, reset } = useForm();

  const { chefData, setChefData } = useContext(Mystore);

  const formSubmit = (data) => {
    let updatedChefArr = [...chefData, data];
    setChefData(updatedChefArr);
    localStorage.setItem("chef ka data", JSON.stringify(updatedChefArr));
    toast.success("Chef added successfully");
    navigate("/chef");
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Add a New Chef
      </h1>
      <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Chef Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter chef name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Recipe Items */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Chef Speacility
          </label>
          <textarea
            {...register("speciality")}
            rows={3}
            placeholder="speciality"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Experience
          </label>
          <textarea
            {...register("experience")}
            rows={3}
            placeholder="Experience"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Cooking Time */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Ratings
          </label>
          <input
            {...register("ratings")}
            type="text"
            placeholder="ratings"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Chef image
          </label>
          <input
            {...register("pic")}
            type="url"
            placeholder="image url"
            accept="image/*"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Add chef
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChiefAdd;
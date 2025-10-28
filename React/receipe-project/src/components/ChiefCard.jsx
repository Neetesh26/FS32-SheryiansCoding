import React, { useState } from "react";
import { useNavigate } from "react-router";

const ChiefCard = ({ elem }) => {
  const navigate = useNavigate();

  return (
    <div className="w-[20%] h-[60%] flex flex-col gap-4 border border-gray-300 shadow-md p-3 rounded-xl">
      <div className="h-[70%] w-full rounded-xl overflow-hidden">
        <img className="h-full w-full object-contain" src={elem.pic} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{elem.name}</h1>
        <p className="text-gray-500">{elem.speciality} </p>
        <p className="text-gray-500">{elem.experience}</p>
        <p className="mb-2">{elem.ratings}mins</p>
        <button className="px-4 py-2 text-xl text-white bg-green-600/70 rounded-xl w-full">
          Hire now
        </button>
      </div>
    </div>
  );
};

export default ChiefCard;
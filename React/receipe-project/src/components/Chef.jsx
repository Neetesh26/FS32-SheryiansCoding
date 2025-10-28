import React, { useContext, useState } from "react";
// import ChefCard from "./ChefCard";
import { useNavigate } from "react-router";
import ChiefCard from "./ChiefCard";
import { Mystore } from "./context/Mycontext";
import { useEffect } from "react";

const Chef = () => {
  const navigate = useNavigate();

  const { chefData } = useContext(Mystore);
// console.log(chefData);

  const [dummyChefData, setDummyChefData] = useState([
    {
      name: "Ranveer singh",
      speciality: "Italian",
      experience: "20",
      ratings: "4.6",
      pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYQPpEkKVNSaOmVhFQwRJEb1QZmLs825AuwT9ADeBk5bREM3hBTJAudKm_f5TiTUldHpYZiEiRT0w6JNEv5Bwt64zryQ4b_uZn7qCwIw",
    },
    {
      name: "Dolly chai wala",
      speciality: "Indian Tea",
      experience: "3",
      ratings: "3.9",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmy2yajTSIC9H9VLT09ejme60Hzat_V-UtGw&s",
    },
    {
      name: "Sanjeev Kapoor",
      speciality: "Indian",
      experience: "40",
      ratings: "4.9",
      pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-X6DCrk0Nhq0kcHP8_LRqNCbaFjWOMii5-olFMFZBw1cAKNmMPBMnOutJH8Tn1XMn6b8y8DRpJ--te05yvKV_x6ogLogfXMdE6LN1Fp4",
    },
  ]);
  useEffect(()=>{
    if (chefData.length) {
      chefData.map((elem)=> setDummyChefData((prev) => [...prev, elem]))
    }
  },[chefData.length])

  return (
    <div className="p-4 flex flex-col gap-10">
      <button
        onClick={() => navigate("/add-chef")}
        className="px-4 py-2 w-30 bg-green-600/70 text-white text-xl"
      >
        Add chef
      </button>
      <div className="flex gap-5">
        {dummyChefData.map((elem, i) => {
          return <ChiefCard elem={elem} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Chef;
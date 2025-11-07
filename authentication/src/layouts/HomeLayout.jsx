import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router";
import { removeUser } from "../features/AuthSlice";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
    alert("user logged out");
  };

  return (
    <div className="h-screen w-full flex p-5 gap-5">
      <nav className="border-r border-gray-500 w-[20%] gap-4 flex flex-col">
        <h1 className="text-3xl font-bold">Logo</h1>
        <div className="flex flex-col gap-4 ml-5">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/home/users">Users</NavLink>
          <NavLink to="/home/products">Products</NavLink>
          <button
            onClick={handleLogout}
            className="text-xl font-bold cursor-pointer"
          >
            Log out
          </button>
        </div>
      </nav>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;

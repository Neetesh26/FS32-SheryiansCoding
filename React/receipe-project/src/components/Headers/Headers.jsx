import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm z-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-bold text-indigo-600">
            MyShop
          </a>

          <nav className="hidden md:flex space-x-6">
            <NavLink
              to={""}
              className={({ isActive }) =>
                `text-gray-700 hover:text-indigo-600 transition  ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }  `
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"chef"}
              className={({ isActive }) =>
                `text-gray-700 hover:text-indigo-600 transition ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              chef
            </NavLink>
            <NavLink
              to={"receipe"}
              className={({ isActive }) =>
                `text-gray-700 hover:text-indigo-600 transition ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              Add Receipe
            </NavLink>
          </nav>

          <div class="flex items-center space-x-3">
            <NavLink
              to={""}
              className="px-4 py-2 capitalize text-[18px] leading-0.5 tracking-wide rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              signIn
            </NavLink>
            {/* <NavLink to={''} className="px-4 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">SignUp</NavLink> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

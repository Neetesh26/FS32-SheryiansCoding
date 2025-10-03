import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
          to={"/products"}
        >
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;

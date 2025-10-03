import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>I m Home</h1>
      <Outlet />
    </div>
  );
};

export default Home;

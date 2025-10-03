import React from "react";
import { Outlet, useNavigate } from "react-router";

const Product = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>I m Product</h1>

      <button onClick={() => navigate("/about")}>Children ko dikhao</button>
      <Outlet />
    </div>
  );
};

export default Product;

import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Product from "../components/Product";
import Details from "../components/Details";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />}>
        <Route path="dets" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

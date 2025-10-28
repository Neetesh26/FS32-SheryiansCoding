import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Chef from "./components/Chef.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import ReceipeAdd from "./components/ReceipeAdd.jsx";
import MyStoreProvider from "./components/context/Mycontext.jsx";
import { ToastContainer } from "react-toastify";
import ReceipeDetails from "./components/ReceipeDetails.jsx";
import ChiefAdd from "./components/ChiefAdd.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="chef" element={<Chef />} />
      <Route path="receipe" element={<ReceipeAdd />} />
      <Route path="receipeDetails/:receipeName" element={ <ReceipeDetails /> } />
      <Route path="/add-chef" element={<ChiefAdd />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <MyStoreProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  </MyStoreProvider>
);

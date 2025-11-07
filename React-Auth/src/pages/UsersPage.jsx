import axios from "axios";
import React from "react";
import { axiosInstance } from "../config/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../apis/usersApi";
import { getData } from "../Hooks/usersCustomHook";

const UsersPage = () => {
  const {data , isPending , error} = getData();
      console.log(data);
      
  // fetchData()
  return <div>userpage</div>;
};

export default UsersPage;

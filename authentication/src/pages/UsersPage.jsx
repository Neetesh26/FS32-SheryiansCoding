import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsersData } from "../apis/usersApis";
import { getDataFromUsersHook } from "../hooks/usersApiHook";

const UsersPage = () => {
  let { data, isPending, error } = getDataFromUsersHook();
  console.log(data);
  return <div>users page</div>;
};

export default UsersPage;

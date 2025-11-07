import { useQuery } from "@tanstack/react-query";
import { fetchUsersData } from "../apis/usersApis";

export const getDataFromUsersHook = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsersData,
  });
};

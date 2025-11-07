import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../apis/usersApi";

export const getData = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
    staleTime: Infinity,
  });
};

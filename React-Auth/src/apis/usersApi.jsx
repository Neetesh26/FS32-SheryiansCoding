import { axiosInstance } from "../config/AxiosInstance";

export const fetchData = async () => {
  try {
    const res = await axiosInstance.get("/users");
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

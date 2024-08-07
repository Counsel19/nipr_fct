import axios, { AxiosError } from "axios";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
// import { IMembershipForm } from "@/types/membership";

// Add a request interceptor
const axiosInstance = axios.create({
  baseURL: "https://api.niprfct.org.ng/api",
});

export const fetchAllGrades = createAppAsyncThunk(
  "grade/fetchAllGrades",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/grade`);

      return res.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
      }
      return thunkAPI.rejectWithValue("Could not Get all Grades");
    }
  }
);

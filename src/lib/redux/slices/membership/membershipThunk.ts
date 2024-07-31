import axios, { AxiosError } from "axios";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { IMembershipForm } from "@/types/membership";

// Add a request interceptor
const axiosInstance = axios.create({
  baseURL: "https://api.niprfct.org.ng/api"
});

export const applyForMembership = createAppAsyncThunk(
  "auth/register",
  async (postPayload: IMembershipForm, thunkAPI) => {
    try {
      await axiosInstance.post(
        `/user/apply`,

        postPayload
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
      }
      return thunkAPI.rejectWithValue("Could not Apply for Membership");
    }
  }
);

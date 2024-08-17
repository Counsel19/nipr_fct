import axios, { AxiosError } from "axios";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
// import { IMembershipForm } from "@/types/membership";

// Add a request interceptor
const axiosInstance = axios.create({
  baseURL: "https://api.niprfct.org.ng/api",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const authToken = sessionStorage.getItem("authToken");

    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const fetchAllNewsPost = createAppAsyncThunk(
  "news/fetchAllNewsPost",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/post`);

      return res.data.data.posts;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
      }
      return thunkAPI.rejectWithValue("Could not Get all News Post");
    }
  }
);
export const fetchNewsPostById = createAppAsyncThunk(
  "news/fetchNewsPostById",
  async (newsId: string, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/post/${newsId}`);

      return res.data.data.Post;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
      }
      return thunkAPI.rejectWithValue("Could not Get single News Post");
    }
  }
);

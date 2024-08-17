import axios, { AxiosError } from "axios";
import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import { IEvent } from "@/types/event";
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

export const fetchAllEvents = createAppAsyncThunk(
  "events/fetchAllEvents",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/event`);

      const allEvents = res.data.data.events;
      const heldEvents: IEvent[] = [];
      const upcomingEvents: IEvent[] = [];

      allEvents?.map((item: IEvent) => {
        if (new Date(item.end_date) < new Date()) {
          heldEvents.push(item);
        } else {
          upcomingEvents.push(item);
        }
      });

      return { allEvents, heldEvents, upcomingEvents };
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
      }
      return thunkAPI.rejectWithValue("Could not Get all Events");
    }
  }
);
export const fetchEventById = createAppAsyncThunk(
  "events/fetchEventById",
  async (eventId: string, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/event/${eventId}`);

      return res.data.data.event;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data?.message);
      }
      return thunkAPI.rejectWithValue("Could not Get single Event");
    }
  }
);

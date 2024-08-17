import { createSlice } from "@reduxjs/toolkit";
import { fetchAllEvents, fetchEventById } from "./eventsThunk";
import { IEvent, IEventWithAttendace } from "@/types/event";

interface gradeSliceState {
  isLoading: boolean;
  allEvents: IEvent[] | null;
  heldEvents: IEvent[] | null;
  upcomingEvents: IEvent[] | null;

  allEventsWithAttendace: IEventWithAttendace[] | null;
  singleEvent: IEvent | null;
  error: string;
}

// type UserProfileKeys = keyof UserProfile;

const initialState: gradeSliceState = {
  isLoading: false,
  allEvents: null,
  heldEvents: null,
  upcomingEvents: null,
  singleEvent: null,
  allEventsWithAttendace: null,
  error: "",
};

const gradeSlice = createSlice({
  name: "grade",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllEvents.fulfilled, (state, action) => {
        state.allEvents = action.payload.allEvents;
        state.heldEvents = action.payload.heldEvents;
        state.upcomingEvents = action.payload.upcomingEvents;
        state.isLoading = false;
      })
      .addCase(fetchAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      })

      .addCase(fetchEventById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEventById.fulfilled, (state, action) => {
        state.singleEvent = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchEventById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      });
  },
});

// export const {} = gradeSlice.actions;

export default gradeSlice.reducer;

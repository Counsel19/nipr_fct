import { createSlice } from "@reduxjs/toolkit";
import { applyForMembership } from "./membershipThunk";

interface profileSliceState {
  isLoading: boolean;
  error: string;
}

// type UserProfileKeys = keyof UserProfile;

const initialState: profileSliceState = {
  isLoading: false,
  error: "",
};

const profileSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyForMembership.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(applyForMembership.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(applyForMembership.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      });
  },
});

// export const {} = profileSlice.actions;

export default profileSlice.reducer;

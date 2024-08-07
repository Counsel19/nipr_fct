import { createSlice } from "@reduxjs/toolkit";
import { fetchAllGrades } from "./gradeThunk";
import { IGrade } from "@/types/grade";

interface gradeSliceState {
  isLoading: boolean;
  allGrades: IGrade[] | null;
  error: string;
}

// type UserProfileKeys = keyof UserProfile;

const initialState: gradeSliceState = {
  isLoading: false,
  allGrades: null,
  error: "",
};

const gradeSlice = createSlice({
  name: "grade",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGrades.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllGrades.fulfilled, (state, action) => {
        state.allGrades = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllGrades.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      });
  },
});

// export const {} = gradeSlice.actions;

export default gradeSlice.reducer;

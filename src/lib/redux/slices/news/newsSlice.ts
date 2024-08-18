import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllNewsPost, fetchNewsPostById } from "./newsThunk";
import { INews } from "@/types/news";
import Fuse from "fuse.js";

interface UpdateStatePayload {
  name: keyof newsSliceState;
  value: unknown;
}

interface newsSliceState {
  [key: string]: unknown;
  isLoading: boolean;
  allNewsPost: INews[] | null;
  filteredNewsPost: INews[] | null;
  singleNewsPost: INews | null;
  error: string;
}

// type UserProfileKeys = keyof UserProfile;

const initialState: newsSliceState = {
  isLoading: false,
  allNewsPost: null,
  filteredNewsPost: null,
  singleNewsPost: null,
  error: "",
};

const options = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.2,
  keys: ["title", "body"],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    updateNewsStateValues: (
      state,
      action: PayloadAction<UpdateStatePayload>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
    handleSearchNews: (state, action) => {
      if (state.allNewsPost) {
        const fuse = new Fuse(state.allNewsPost, options);
        const value = action.payload;

        const results = fuse.search(value);

        const items = results.map((result) => result.item);

        state.filteredNewsPost = items;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNewsPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllNewsPost.fulfilled, (state, action) => {
        state.allNewsPost = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllNewsPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      })

      .addCase(fetchNewsPostById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNewsPostById.fulfilled, (state, action) => {
        state.singleNewsPost = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNewsPostById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      });
  },
});

export const { updateNewsStateValues, handleSearchNews } = newsSlice.actions;

export default newsSlice.reducer;

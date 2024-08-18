import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchResource, fetchSingleResource } from "./resourceThunk";
import { IResource } from "@/types/resource";
import Fuse from "fuse.js";

interface UpdateStatePayload {
  name: keyof resourceSliceState;
  value: unknown;
}

interface resourceSliceState {
  [key: string]: unknown;
  isLoading: boolean;
  allResources: IResource[] | null;
  filteredResource: IResource[] | null;
  selectedResourceItem: IResource | null;
  error: string;
}

// type UserProfileKeys = keyof UserProfile;

const initialState: resourceSliceState = {
  isLoading: false,
  allResources: null,
  filteredResource: null,
  selectedResourceItem: null,
  error: "",
};

const options = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.2,
  keys: ["title", "desc"],
};

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    updateResourceStateValues: (
      state,
      action: PayloadAction<UpdateStatePayload>
    ) => {
      state[action.payload.name] = action.payload.value;
    },

    handleSearchResource: (state, action) => {
      if (state.allResources) {
        const fuse = new Fuse(state.allResources, options);
        const value = action.payload;

        const results = fuse.search(value);

        const items = results.map((result) => result.item);

        state.filteredResource = items;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResource.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchResource.fulfilled, (state, action) => {
        state.allResources = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchResource.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      })
      .addCase(fetchSingleResource.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleResource.fulfilled, (state, action) => {
        state.selectedResourceItem = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSingleResource.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "";
      });
  },
});

export const { updateResourceStateValues, handleSearchResource } =
  resourceSlice.actions;

export default resourceSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/auth/authSlice";
import MembershipSlice from "./slices/membership/membershipSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    membership: MembershipSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

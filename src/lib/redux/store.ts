import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/auth/authSlice";
import MembershipSlice from "./slices/membership/membershipSlice";
import GradeSlice from "./slices/grade/gradeSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    membership: MembershipSlice,
    grade: GradeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

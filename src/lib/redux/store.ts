import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./slices/auth/authSlice";
import MembershipSlice from "./slices/membership/membershipSlice";
import GradeSlice from "./slices/grade/gradeSlice";
import GallerySlice from "./slices/gallery/gallerySlice";
import NewsSlice from "./slices/news/newsSlice";
import ResourceSlice from "./slices/resource/resourceSlice";
import EventSlice from "./slices/events/eventsSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    membership: MembershipSlice,
    grade: GradeSlice,
    gallery: GallerySlice,
    news: NewsSlice,
    resources: ResourceSlice,
    events: EventSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

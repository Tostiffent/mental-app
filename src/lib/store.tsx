import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import authSlice from "./authSlice";
import forumSlice from "./forumSlice";

//the redux store to be used in the whole app
export const store = configureStore({
  //this uses individual reducer slices to make on combied reducer
  reducer: {
    postSlice: postSlice,
    auth: authSlice,
    forumData: forumSlice,
  },
  //enable logger middleware only while testing
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

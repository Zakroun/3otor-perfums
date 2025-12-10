import { configureStore } from "@reduxjs/toolkit";
import { perfumSlice } from "./perfumslice";
const store = configureStore({
  reducer: {
    perfum: perfumSlice.reducer,
  },
});

export default store;

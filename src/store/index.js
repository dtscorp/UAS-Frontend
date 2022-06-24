import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/CovidSlice";

const store = configureStore({
  reducer: {
    covidReducer,
  },
});

export default store;

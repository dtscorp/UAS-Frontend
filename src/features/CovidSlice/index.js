import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";
const covidSlice = createSlice({
  name: "Covid  Slice",
  initialState: {
    provinsi: data.provinces,
    covidCase: [],
    urlSummary: "",
  },

  reducers: {
    updateCovidProvinsi(state, action) {
      state.provinsi = action.payload;
    },
    updateCovidCase(state, action) {
      state.covidCase = action.payload;
    },
    updateURLSummary(state, action) {
      state.urlSummary = action.payload;
    },
  },
});

const { updateCovidProvinsi, updateCovidCase, updateURLSummary } =
  covidSlice.actions;
const covidReducer = covidSlice.reducer;

export default covidReducer;
export { updateCovidProvinsi, updateCovidCase, updateURLSummary };

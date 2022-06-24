import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";
const covidSlice = createSlice({
  name: "Covid  Slice",
  initialState: {
    provinsi: data.provinces,
    covidCase: [],
  },

  reducers: {
    updateCovidProvinsi(state, action) {
      state.provinsi = action.payload;
    },
    updateCovidCase(state, action) {
      state.covidCase = action.payload;
    },
  },
});

const { updateCovidProvinsi, updateCovidCase } = covidSlice.actions;
const covidReducer = covidSlice.reducer;

export default covidReducer;
export { updateCovidProvinsi, updateCovidCase };

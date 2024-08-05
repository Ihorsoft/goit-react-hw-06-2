import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
//import { setStatusFilter } from "./actions";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

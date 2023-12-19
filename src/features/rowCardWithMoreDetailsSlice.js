import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    data: null,
    isOpen: false,
    top: null,
    left: null,
    with: null,
    showType: null,
  },
};

export const rowCardWithMoreDetailsSlice = createSlice({
  name: "rowCardWithMoreDetails",
  initialState,
  reducers: {
    openRowCardWithMoreDetails: (state, action) => {
      state.value = action.payload;
    },
    closeRowCardWithMoreDetails: (state) => {
      state.value = { ...state.value, isOpen: false };
    },
  },
});

export const { openRowCardWithMoreDetails, closeRowCardWithMoreDetails } =
  rowCardWithMoreDetailsSlice.actions;
export const selectRowCardWithMoreDetails = (state) =>
  state.rowCardWithMoreDetails.value;

export default rowCardWithMoreDetailsSlice.reducer;

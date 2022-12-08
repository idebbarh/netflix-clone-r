import { configureStore } from '@reduxjs/toolkit';
import rowCardWithMoreDetailsReducer from '../features/rowCardWithMoreDetailsSlice';

export const store = configureStore({
  reducer: {
    rowCardWithMoreDetails: rowCardWithMoreDetailsReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import rowCardWithMoreDetailsReducer from '../features/rowCardWithMoreDetailsSlice';
import homePageSearchBarValueReducer from '../features/homePageSearchBarValueSlice';

export const store = configureStore({
  reducer: {
    rowCardWithMoreDetails: rowCardWithMoreDetailsReducer,
    homePageSearchBarValue:homePageSearchBarValueReducer
  },
});

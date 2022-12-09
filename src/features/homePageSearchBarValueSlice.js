import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value:''
};



export const homePageSearchBarValueSlice = createSlice({
  name: 'homePageSearchBarValue',
  initialState,
  reducers: {
        setHomePageSearchBarValue : (state,action)=>{
            state.value = action.payload;
        }
  },
});

export const {setHomePageSearchBarValue} = homePageSearchBarValueSlice.actions;
export const selectHomePageSearchBarValue = (state) => state.homePageSearchBarValue.value;

export default homePageSearchBarValueSlice.reducer;

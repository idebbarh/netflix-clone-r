import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value:null
};



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.value = action.payload;
    },
    removeUser: (state) => {
      state.value = null;
    },
  },
});

export const { setUser,removeUser} = userSlice.actions;
export const selectUser = (state) => state.user.value;

export default userSlice.reducer;

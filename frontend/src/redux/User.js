import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  userId:'',
  isLoggedIn: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
     setUserId: (state, action) => {
      state.isLoggedIn = action.payload;
    },
     logout: state => {
      return initialState;
    }
  }
});

export const { setName, setEmail, setLoggedIn, logout, setUserId } = userSlice.actions;

export default userSlice.reducer;

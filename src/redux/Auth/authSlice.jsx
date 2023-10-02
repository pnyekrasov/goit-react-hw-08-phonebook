import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';

const handleSubmitUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutUser = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleSubmitUser)
      .addCase(logIn.fulfilled, handleSubmitUser)
      .addCase(logOut.fulfilled, handleLogOutUser),
});

export const authReducer = authSlice.reducer;

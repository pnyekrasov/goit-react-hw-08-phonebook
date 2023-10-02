import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

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

const handlePendingRefreshUser = (state, action) => {
  state.isRefreshing = true;
};

const handleRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRejectedRefreshUser = (state, action) => {
  state.isRefreshing = false;
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
      .addCase(logOut.fulfilled, handleLogOutUser)
      .addCase(refreshUser.pending, handlePendingRefreshUser)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.rejected, handleRejectedRefreshUser),
});

export const authReducer = authSlice.reducer;

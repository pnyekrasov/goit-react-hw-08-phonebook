import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleSubmitUserFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutUserFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handlePendingRefreshUser = (state, action) => {
  state.isLoading = true;
  state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRejectedRefreshUser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleSubmitUserFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleSubmitUserFulfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogOutUserFulfilled)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePendingRefreshUser)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRejectedRefreshUser),
});

export const authReducer = authSlice.reducer;

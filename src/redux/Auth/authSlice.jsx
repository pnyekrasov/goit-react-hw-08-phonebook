import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './operations';

const handleSubmitUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  // extraReducers: {
  //   [register.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  //   [logIn.fulfilled](state, action) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleSubmitUser)
      .addCase(logIn.fulfilled, handleSubmitUser),
});

export const authReducer = authSlice.reducer;

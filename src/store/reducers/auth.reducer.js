import { createSlice } from '@reduxjs/toolkit';

import { authActions } from '../actions';

const { reducer } = createSlice({
  name: 'auth',
  initialState: {
    login: undefined,
    createUserStatus: undefined,
    waiter: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(authActions.createUser.pending, (state) => {
        state.waiter = true;
      })
      .addCase(authActions.createUser.fulfilled, (state, action) => {
        state.login = action.payload;
        state.waiter = false;
      })
      .addCase(authActions.createUser.rejected, (state, action) => {
        state.waiter = false;
        state.createUserStatus = action.error.code;
      });
  },
});

export default reducer;

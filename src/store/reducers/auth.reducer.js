import { createSlice } from '@reduxjs/toolkit';

import { authActions } from '../actions';

const { reducer } = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
    errors: false,
    waiter: false,
  },
  extraReducers: (builder) => {
    builder
      // createUser
      .addCase(authActions.createUser.pending, (state) => {
        state.waiter = true;
        state.errors = false;
      })
      .addCase(authActions.createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.waiter = false;
        state.errors = false;
      })
      .addCase(authActions.createUser.rejected, (state, action) => {
        state.waiter = false;
        state.errors = action.payload.errors;
      })

      // authUser
      .addCase(authActions.authUser.pending, (state) => {
        state.waiter = true;
      })
      .addCase(authActions.authUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.waiter = false;
      })
      .addCase(authActions.authUser.rejected, (state, action) => {
        state.waiter = false;
        state.createUserStatus = action.error.code;
      });
  },
});

export default reducer;

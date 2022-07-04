import { createSlice } from '@reduxjs/toolkit';

import { exampleActions } from '../actions';

const { reducer } = createSlice({
  name: 'auth',
  initialState: {
    login: undefined,
    createUserStatus: undefined,
    waiter: false,
  },
  extraReducers: (builder) => {
    builder.addCase(exampleActions.setUser, (state, action) => {
      state.login = action.payload;
      state.waiter = false;
    });

    builder
      .addCase(exampleActions.createUser.pending, (state) => {
        state.waiter = true;
      })
      .addCase(exampleActions.createUser.fulfilled, (state, action) => {
        state.login = action.payload;
        state.waiter = false;
      })
      .addCase(exampleActions.createUser.rejected, (state, action) => {
        state.waiter = false;
        state.createUserStatus = action.error.code;
      });
  },
});

export default reducer;

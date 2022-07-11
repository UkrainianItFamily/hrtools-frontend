import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'src/services';

export const createUser = createAsyncThunk('auth/create-user', async (data) => {
  const result = await authService.signUp(data);

  return result;
});

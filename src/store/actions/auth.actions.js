import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from 'src/services';

export const createUser = createAsyncThunk(
  'auth/create-user',
  async (data, { rejectWithValue }) => {
    try {
      const result = await authService.signUp(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const authUser = createAsyncThunk('auth/auth-user', async (data, { rejectWithValue }) => {
  try {
    const result = await authService.signIn(data);
    return result;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

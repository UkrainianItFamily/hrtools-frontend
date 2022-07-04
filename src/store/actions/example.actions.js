import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { exampleService } from 'src/services';

export const setUser = createAction('example/set-user', () => ({
  payload: 'example',
}));

export const createUser = createAsyncThunk('example/create-user', async ({ email, password }) => {
  const result = await exampleService.exampleMethod(email, password);

  return result;
});

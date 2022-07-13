import { api } from 'src/api';

export const signUp = async (data) => {
  const result = await api.post(`auth/register`, data);

  return result;
};

export const signIn = async (data) => {
  const result = await api.post(`auth/login`, data);

  return result;
};

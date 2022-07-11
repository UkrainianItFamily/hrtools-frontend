import { api } from 'src/api';

export const signUp = async (data) => {
  const result = await api.post(`auth/register`, data);

  return result;
};

import { api } from 'src/api';

export const signUp = async (data) => {
  const result = await api.post(`/api/v1/auth/register`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return result;
};

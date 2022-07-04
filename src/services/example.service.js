import { api } from 'src/api';

export const exampleMethod = async (data) => {
  const result = await api.post(`/example/`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return result;
};

import { Button, TextField } from '@mui/material';
import React from 'react';

import * as S from '../../styles';

const SignUp = () => (
  <>
    <S.AuthTitle>Реєстрація</S.AuthTitle>
    <form>
      <S.FormRow>
        <TextField fullWidth label="Ім’я" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <TextField fullWidth label="Прізвище" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <TextField fullWidth label="Ваша електронна адреса" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <TextField fullWidth label="Номер телефону" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <TextField fullWidth label="Пароль" type="password" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <TextField fullWidth label="Підтвердити пароль" type="password" variant="outlined" />
      </S.FormRow>

      <S.FormRow>
        <Button variant="contained" type="submit" fullWidth size="large">
          Реєстрація
        </Button>
      </S.FormRow>
    </form>
  </>
);
export default SignUp;

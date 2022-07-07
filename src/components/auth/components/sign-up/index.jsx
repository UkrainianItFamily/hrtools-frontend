import { Button, TextField } from '@mui/material';
import React from 'react';

import * as S from '../../styles';

const SignUp = () => (
  <>
    <S.AuthTitle>Реєстрація</S.AuthTitle>
    <form>
      <S.formRow>
        <TextField fullWidth label="Ім’я" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <TextField fullWidth label="Прізвище" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <TextField fullWidth label="Ваша електронна адреса" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <TextField fullWidth label="Номер телефону" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <TextField fullWidth label="Пароль" type="password" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <TextField fullWidth label="Підтвердити пароль" type="password" variant="outlined" />
      </S.formRow>

      <S.formRow>
        <Button variant="contained" type="submit" fullWidth size="large">
          Реєстрація
        </Button>
      </S.formRow>
    </form>
  </>
);
export default SignUp;

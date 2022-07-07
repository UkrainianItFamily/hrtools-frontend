import { Button, TextField } from '@mui/material';
import React from 'react';

import * as S from '../../styles';

const SignIn = () => (
  <>
    <S.AuthTitle>Вхід</S.AuthTitle>
    <form>
      <S.FormRow>
        <TextField fullWidth label="Ваш e-mail" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <TextField fullWidth label="Ваш пароль" type="password" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <Button variant="contained" type="submit" fullWidth size="large">
          Підтвердити
        </Button>
      </S.FormRow>
      <S.StyledLink to="/auth/forgot-pass">Відновити пароль</S.StyledLink>
    </form>
  </>
);

export default SignIn;

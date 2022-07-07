import { Button, TextField } from '@mui/material';
import React from 'react';

import * as S from '../../styles';

const SignIn = () => (
  <>
    <S.AuthTitle>Вхід</S.AuthTitle>
    <form>
      <S.formRow>
        <TextField fullWidth label="Ваш e-mail" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <TextField fullWidth label="Ваш пароль" type="password" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <Button variant="contained" type="submit" fullWidth size="large">
          Підтвердити
        </Button>
      </S.formRow>
      <S.StyledLink to="/auth/forgot-pass">Відновити пароль</S.StyledLink>
    </form>
  </>
);

export default SignIn;

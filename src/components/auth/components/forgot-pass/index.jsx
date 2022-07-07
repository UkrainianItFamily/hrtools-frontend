import { Button, TextField } from '@mui/material';
import React from 'react';

import * as S from '../../styles';

const forgotPass = () => (
  <>
    <S.AuthTitle>Введіть пошту для відновлення паролю</S.AuthTitle>
    <form>
      <S.formRow>
        <TextField fullWidth label="Ваш e-mail" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <Button variant="contained" type="submit" fullWidth size="large">
          Підтвердити
        </Button>
      </S.formRow>
      <S.StyledLink to="/auth/sign-in">Увійти</S.StyledLink>
    </form>
  </>
);

export default forgotPass;

import { Button, TextField } from '@mui/material';
import React from 'react';

import * as S from '../../styles';

const forgotPass = () => (
  <>
    <S.AuthTitle>Введіть пошту для відновлення паролю</S.AuthTitle>
    <form>
      <S.FormRow>
        <TextField fullWidth label="Ваш e-mail" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <Button variant="contained" type="submit" fullWidth size="large">
          Підтвердити
        </Button>
      </S.FormRow>
      <S.StyledLink to="/auth/">Увійти</S.StyledLink>
    </form>
  </>
);

export default forgotPass;

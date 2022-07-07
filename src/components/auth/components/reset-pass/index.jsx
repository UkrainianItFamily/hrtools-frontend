import { Button, TextField } from '@mui/material';
import React from 'react';

import * as S from '../../styles';

const forgotPass = () => (
  <>
    <S.AuthTitle>Вигадайте новий пароль</S.AuthTitle>
    <form>
      <S.formRow>
        <TextField fullWidth label="Новий пароль" type="password" variant="outlined" />
      </S.formRow>
      <S.formRow>
        <TextField fullWidth label="Підтвердити пароль" type="password" variant="outlined" />
      </S.formRow>

      <S.formRow>
        <Button variant="contained" type="submit" fullWidth size="large">
          Підтвердити
        </Button>
      </S.formRow>
    </form>
  </>
);

export default forgotPass;

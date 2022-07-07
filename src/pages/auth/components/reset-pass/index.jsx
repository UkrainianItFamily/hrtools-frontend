import { Button, TextField } from '@mui/material';
import React from 'react';

import * as S from '../../styles';

const ResetPass = () => (
  <>
    <S.AuthTitle>Вигадайте новий пароль</S.AuthTitle>
    <form>
      <S.FormRow>
        <TextField fullWidth label="Новий пароль" type="password" variant="outlined" />
      </S.FormRow>
      <S.FormRow>
        <TextField fullWidth label="Підтвердити пароль" type="password" variant="outlined" />
      </S.FormRow>

      <S.FormRow>
        <Button variant="contained" type="submit" fullWidth size="large">
          Підтвердити
        </Button>
      </S.FormRow>
    </form>
  </>
);

export default ResetPass;

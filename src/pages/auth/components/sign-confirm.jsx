import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FlexContainer } from 'src/components';

import * as S from '../styles';

const SignConfirm = () => (
  <>
    <S.AuthTitle>Дякуємо за підтвердження електронної адреси</S.AuthTitle>
    <S.FormRow>
      <FlexContainer $justify="center">
        <NavLink to="/auth">
          <Button variant="contained" type="button" size="large">
            Увійти
          </Button>
        </NavLink>
      </FlexContainer>
    </S.FormRow>
  </>
);

export default SignConfirm;

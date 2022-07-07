import { Outlet } from 'react-router-dom';

import * as S from './styles';

const Auth = () => (
  <S.AuthPage>
    <S.AuthWrap>
      <S.AuthContainer>
        <Outlet />
        <S.AuthBottomLine />
      </S.AuthContainer>
    </S.AuthWrap>
  </S.AuthPage>
);

export default Auth;

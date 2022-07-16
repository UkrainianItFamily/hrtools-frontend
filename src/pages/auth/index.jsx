import { Route, Routes } from 'react-router-dom';

import { ForgotPass, ResetPass, SignConfirm, SignIn, SignUp } from './components';
import * as S from './styles';

const Auth = () => (
  <S.AuthPage>
    <S.AuthWrap>
      <S.AuthContainer>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-pass" element={<ForgotPass />} />
          <Route path="reset-pass" element={<ResetPass />} />
          <Route path="sign-confirm" element={<SignConfirm />} />
        </Routes>
        <S.AuthBottomLine />
      </S.AuthContainer>
    </S.AuthWrap>
  </S.AuthPage>
);

export default Auth;

import { NavLink } from 'react-router-dom';

import * as S from './styles';

const TestNav = () => (
  <S.NavWrap>
    <NavLink to="/">home</NavLink>
    <NavLink to="auth/sign-in">sign-in</NavLink>
    <NavLink to="auth/sign-up">sign-up</NavLink>
    <NavLink to="auth/forgot-pass">forgot-pass</NavLink>
    <NavLink to="auth/reset-pass">reset-pass</NavLink>
  </S.NavWrap>
);

export default TestNav;

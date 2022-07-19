import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthPage = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #eee;
`;

export const AuthWrap = styled.div`
  max-width: 608px;
  width: 100%;
`;

export const AuthContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  position: relative;
`;

export const AuthBottomLine = styled.div`
  background: linear-gradient(90deg, #c0e94f, #82af13);
  background: linear-gradient(
    90deg,
    var(--fabric-theme-lightest, #c0e94f) 0,
    var(--fabric-theme-lighter, #82af13) 100%
  );
  bottom: 0;
  content: '';
  display: block;
  height: 3px;
  left: 0;
  position: absolute;
  width: 100%;
`;

export const AuthTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const AuthSubTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  max-width: 310px;
  margin: 0 auto;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const FormRow = styled.div`
  margin-bottom: 15px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  &:hover {
    color: green;
  }
`;

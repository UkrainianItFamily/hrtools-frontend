import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-size: 20px;
  display: flex;
  align-items: center;
  & span {
    display: inline-block;
    margin-right: 5px;
    border-radius: 100%;
    color: #fff;
    padding: 5px;
    background-color: #303030;
  }
`;

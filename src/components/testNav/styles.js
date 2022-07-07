import styled from '@emotion/styled';

export const NavWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > a {
    font-size: 16px;
    display: block;
    margin-right: 15px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  & > a.active {
    text-decoration: underline;
  }
`;

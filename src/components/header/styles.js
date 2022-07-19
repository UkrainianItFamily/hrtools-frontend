import styled from '@emotion/styled';
/* main container, holding aside amd board */

export const Header = styled.div`
  padding: 25px 0;
`;

export const HeaderFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderLeft = styled.div`
  flex: 0 0 200px;
`;

export const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin-right: 15px;
    list-style: none;
  }
  a:hover,
  a.active {
    text-decoration: underline;
  }
`;

export const HeaderAuthFlex = styled.div`
  display: flex;
  gap: 10px;
`;

export const PageName = styled.h1`
  font-size: 24px;
  margin: 25px 0;
`;

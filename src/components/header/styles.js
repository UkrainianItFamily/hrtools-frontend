import styled from '@emotion/styled/macro';
import IconButton from '@mui/material/IconButton';
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
  display: flex;
  align-items: center;
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
  @media (max-width: 1023px) {
    margin-right: 0;
    justify-content: center;
    margin-bottom: 25px;
    flex: initial;
    ul {
      flex-direction: column;
      align-items: center;
    }
    li {
      margin-bottom: 20px;
      font-size: 18px;
      margin-right: 0;
    }
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
export const MenuIconButton = styled(IconButton)`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  ${MenuIconButton} {
    display: none;
  }
  @media (max-width: 1023px) {
    display: none;
    position: fixed;
    justify-content: flex-start;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    bottom: 0;
    background-color: #fff;
    padding: 75px 15px 25px;
    overflow: auto;
    ${MenuIconButton} {
      position: absolute;
      top: 0px;
      right: 0px;
      display: flex;
      z-index: 5;
    }
    &.active {
      display: flex;
      animation: fadeinZoom 0.2s linear;
    }
  }
`;

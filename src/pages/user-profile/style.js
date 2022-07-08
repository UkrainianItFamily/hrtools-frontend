import styled from '@emotion/styled';

export const Main = styled.div`
  display: grid;
  grid-template-columns: 160px 240px 3fr 160px;
  // grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'header header header header'
    '. nav board .';
  font-family: Helvetica;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 160px 240px 3fr 160px;
  grid-template-rows: 2fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    '. avatar title .'
    '. avatar menu .';
  grid-area: header;
  margin: 0;
  padding: 0;
  background: linear-gradient(to left, #547801, #82af13);
  color: white;
  border-top: 2px solid #bee358;
  min-height: 200px;
  font-family: Helvetica;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 26px;
`;

export const MainNavigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  grid-area: menu;
  align-items: end;
`;

export const MainNavigationItem = styled.li`
  font-size: 14px;
  padding: 16px 12px;
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: ${(props) => (props.active ? '#616c32' : 'inherit')};
  background-color: ${(props) => (props.active ? 'white' : 'inherit')};
  font-weight: ${(props) => (props.active ? 600 : 400)};
  &:hover {
    background-color: ${(props) => (props.active ? 'white' : '#8db03e')};
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  grid-area: avatar;
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
  border: 3px solid white;
  margin-top: 18px;
  position: absolute;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  grid-area: title;
  align-items: end;
  padding-bottom: 15px;
  padding-left: 15px;
`;

export const TitleButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const HeaderButton = styled.div`
  font-size: 12px;
  padding: 8px 16px;
  border: 1px solid white;
`;

export const AsideNav = styled.div`
  background-color: #f3f3f3;
  grid-area: nav;
  padding: 16px 16px;
`;

export const Board = styled.div`
  grid-area: board;
`;

export const AsideMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid #ebebeb;
  padding: 16px 0;
`;

export const AsideMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const AsideMenuItemText = styled.span`
  color: #9a9a9a;
  font-size: 14px;
`;

export const AsideMenuItemTitle = styled.span`
  color: #65762d;
  font-size: 14px;
`;

export const AsideMenuItemSubtitle = styled.span`
  color: #9a9a9a;
  font-size: 14px;
  font-weight: 700;
`;

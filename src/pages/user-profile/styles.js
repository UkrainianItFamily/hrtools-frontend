import styled from '@emotion/styled';

export const Main = styled.div`
  display: grid;
  grid-template-columns: 160px 240px 3fr 160px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    'header header header header'
    '. nav board .'
    'footer footer footer footer';
  font-family: Helvetica;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 160px 240px 3fr 160px;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-areas:
    '. logo menu .'
    '. pagetitle . .'
    '. avatar . .'
    '. avatar title .';
  grid-area: header;
  margin: 0;
  padding-top: 16px;
  background: linear-gradient(to left, #547801, #82af13);
  color: white;
  border-top: 2px solid #bee358;
  min-height: 200px;
  font-family: Helvetica;
  z-index: 1;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 160px 3fr 160px;
  grid-template-areas:
  '. footeritem .'
  background: #c9d6ff;
  background: linear-gradient(to right, #e0eafc, #cfdef3);
  min-height: 100px;
  grid-area: footer;
`;

export const Title = styled.h1`
  font-size: 26px;
`;

export const PageTitle = styled(Title)`
  grid-area: pagetitle;
  font-size: 18px;
  align-self: end;
`;

export const MainNavigation = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row-reverse;
  justify-content: flex-start;
  gap: 10px;
  grid-area: menu;
  align-items: end;s
`;

export const MainNavigationItem = styled.li`
  font-size: 14px;
  padding: 16px 12px;
  cursor: pointer;
  border-radius: 4px;
  color: ${(props) => (props.active ? '#616c32' : 'inherit')};
  background-color: ${(props) => (props.active ? 'white' : 'inherit')};
  font-weight: ${(props) => (props.active ? 600 : 400)};
  &:hover {
    background-color: ${(props) => (props.active ? 'white' : '#8db03e')};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  grid-area: logo;
`;

export const Logo = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const LogoSpecial = styled.span`
  background-color: #547801;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoRegular = styled.span`
font-size: 16px;s
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
  grid-area: title;
  align-items: start;
  padding-left: 40px;
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
  padding: 120px 16px 16px 16px;
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
  background-color: #f3f3f3;
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

export const MobileNavigation = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  gap: 10px;
  align-items: end;
  position: absolute;
  right: 0;
  width: 40%;
`;

export const MobileNavIconContainer = styled.div`
  right: 16px;
  position: absolute;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

export const MobileNavContainer = styled.div`
  background: linear-gradient(to left, #547801, #82af13);
  width: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding-left: 16px;
  position: absolute;
  top: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
`;

export const MainInputContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px repeat(11, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-areas:
    'blockonetitle . .'
    'inputone inputtwo inputthree'
    'inputfour inputfive inputsix'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . .'
    '. . submitbutton';
  padding: 16px 0 16px 40px;
`;

export const BlockOneTitle = styled(Title)`
  grid-area: pagetitle;
  font-size: 18px;
  grid-area: blockonetitle;
  align-self: start;
`;

export const InputOneWrapper = styled.div`
  display: flex;
  grid-area: inputone;
`;

export const InputTwoWrapper = styled.div`
  display: flex;
  grid-area: inputtwo;
`;
export const InputThreeWrapper = styled.div`
  display: flex;
  grid-area: inputthree;
`;

export const InputFourWrapper = styled.div`
  display: flex;
  grid-area: inputfour;
`;

export const InputFiveWrapper = styled.div`
  display: flex;
  grid-area: inputfive;
`;
export const InputSixWrapper = styled.div`
  display: flex;
  grid-area: inputsix;
`;

export const InputFifteenWrapper = styled.div`
  display: flex;
  grid-area: submitbutton;
  justify-content: end;
`;

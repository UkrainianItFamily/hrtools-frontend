import useMediaQuery from '@mui/material/useMediaQuery';

import * as S from '../../styles';
import { MainMenu, MobileNavbar, UserAvatar } from './components';

const Header = () => {
  const matches = useMediaQuery('(max-width:1182px)');
  return (
    <S.Header>
      <S.LogoContainer>
        <S.Logo>
          <S.LogoSpecial>HR</S.LogoSpecial>
          <S.LogoRegular>tools</S.LogoRegular>
        </S.Logo>
      </S.LogoContainer>
      <S.PageTitle>Персональний кабінет</S.PageTitle>
      <UserAvatar />
      <S.TitleContainer>
        <S.Title>Mary Stone</S.Title>
      </S.TitleContainer>
      {!matches && (
        <S.MainNavigation>
          <MainMenu />
        </S.MainNavigation>
      )}
      {matches && <MobileNavbar />}
    </S.Header>
  );
};

export default Header;

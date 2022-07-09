import useMediaQuery from '@mui/material/useMediaQuery';
import { images } from 'src/assets';

import * as S from '../../styles';
import { MainMenu, MobileNavbar } from './components';

const Header = () => {
  const matches = useMediaQuery('(max-width:995px)');
  return (
    <S.Header>
      <S.AvatarContainer>
        <S.Avatar src={images.userPhoto} />
      </S.AvatarContainer>
      <S.TitleContainer>
        <S.Title>Mary Stone</S.Title>
        <S.TitleButtons>
          <S.HeaderButton>Request a Change</S.HeaderButton>
          <S.HeaderButton>Gear</S.HeaderButton>
        </S.TitleButtons>
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

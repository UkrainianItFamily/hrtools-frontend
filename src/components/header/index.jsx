import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Logo } from 'src/components';
import * as GS from 'src/global-styles';

import { MainMenu } from './components';
import * as S from './styles';

const Header = ({ pageName }) => (
  <S.Header>
    <GS.Wrap>
      <S.HeaderFlex>
        <S.HeaderLeft>
          <Logo />
        </S.HeaderLeft>
        <S.HeaderRight>
          <MainMenu />
          <NavLink to="auth/exit">
            <Button variant="contained">Вихід</Button>
          </NavLink>
        </S.HeaderRight>
      </S.HeaderFlex>
    </GS.Wrap>
    <GS.Wrap>
      <S.PageName>{pageName}</S.PageName>
    </GS.Wrap>
  </S.Header>
);
Header.propTypes = {
  pageName: PropTypes.string.isRequired,
};
export default Header;

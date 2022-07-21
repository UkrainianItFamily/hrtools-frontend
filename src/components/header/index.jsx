import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from 'src/components';
import * as GS from 'src/global-styles';

import { MainMenu } from './components';
import * as S from './styles';

const Header = ({ pageName }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <S.Header>
      <GS.Wrap>
        <S.HeaderFlex>
          <S.HeaderLeft>
            <Logo />
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.Menu className={menuToggle ? 'active' : ''}>
              <MainMenu />
              <NavLink to="/auth/exit">
                <Button variant="contained">Вихід</Button>
              </NavLink>
              <S.MenuIconButton
                size="large"
                aria-label="burger-close"
                onClick={() => setMenuToggle(false)}
              >
                <CloseIcon />
              </S.MenuIconButton>
            </S.Menu>
            <S.MenuIconButton
              size="35px"
              aria-label="burger-open"
              onClick={() => setMenuToggle(true)}
            >
              <MenuIcon />
            </S.MenuIconButton>
          </S.HeaderRight>
        </S.HeaderFlex>
      </GS.Wrap>
      <GS.Wrap>
        <S.PageName>{pageName}</S.PageName>
      </GS.Wrap>
    </S.Header>
  );
};
Header.propTypes = {
  pageName: PropTypes.string.isRequired,
};
export default Header;

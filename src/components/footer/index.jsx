import { NavLink } from 'react-router-dom';
import * as GS from 'src/global-styles';

import * as S from './styles';

const Footer = () => (
  <S.Footer>
    <GS.Wrap>
      <S.FooterFlex>
        <S.FooterMenu>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
        </S.FooterMenu>

        <S.FooterMenu>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
        </S.FooterMenu>

        <S.FooterMenu>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
          <S.FooterLi>
            <NavLink to="/">Новини</NavLink>
          </S.FooterLi>
        </S.FooterMenu>
      </S.FooterFlex>
    </GS.Wrap>
  </S.Footer>
);

export default Footer;

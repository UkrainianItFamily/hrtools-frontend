import { NavLink } from 'react-router-dom';
import { menuItems } from 'src/constants';

import * as S from '../styles';

const MainMenu = () => (
  <S.HeaderNav>
    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>
          <NavLink to={`/${item.to}`}>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  </S.HeaderNav>
);

export default MainMenu;

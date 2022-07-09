import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems } from 'src/constants';

import * as S from '../../../styles';

const MainMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(10);
  const onClickMenuItem = (index) => {
    setActiveMenuItem(index);
  };

  const mainMenu = menuItems.map((item, index) => (
    <NavLink to={item.to} key={item.id}>
      <S.MainNavigationItem
        onClick={() => onClickMenuItem(index)}
        active={activeMenuItem === index}
        key={item.id}
      >
        {item.name}
      </S.MainNavigationItem>
    </NavLink>
  ));

  return (
    <>
      {mainMenu}
      <span />
    </>
  );
};

export default MainMenu;

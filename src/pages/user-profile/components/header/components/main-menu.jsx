import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import * as S from '../../../style';

const MainMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(10);
  const onClickMenuItem = (index) => {
    setActiveMenuItem(index);
  };
  const menuItems = [
    { name: 'Personal', to: 'personal', id: 0 },
    { name: 'Job', to: 'job', id: 1 },
    { name: 'Time Off', to: 'timeoff', id: 2 },
    { name: 'Emergency', to: 'emergency', id: 3 },
    { name: 'Documents', to: 'documents', id: 4 },
    { name: 'Notes', to: 'notes', id: 5 },
    { name: 'Benefits', to: 'benefits', id: 6 },
    { name: 'Training', to: 'training', id: 7 },
    { name: 'More', to: 'more', id: 8 },
  ];
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

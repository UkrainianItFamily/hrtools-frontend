import { useState } from 'react';

import * as S from '../../../style';
import { MainMenu } from './index';

const MobileNavbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const showMobileNavbar = () => setMobileNavbar(!mobileNavbar);
  return (
    <S.MobileNavigation onClick={showMobileNavbar}>
      <S.MobileNavContainer>
        {mobileNavbar ? (
          <S.MobileNavIconContainer onClick={showMobileNavbar} active={showMobileNavbar}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="white"
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </g>
            </svg>
          </S.MobileNavIconContainer>
        ) : (
          <S.MobileNavIconContainer onClick={showMobileNavbar} active={showMobileNavbar}>
            <svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
                fill="white"
              />
              <path
                d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
                fill="white"
              />
              <path
                d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
                fill="white"
              />
            </svg>
          </S.MobileNavIconContainer>
        )}
        {mobileNavbar && <MainMenu />}
      </S.MobileNavContainer>
    </S.MobileNavigation>
  );
};

export default MobileNavbar;

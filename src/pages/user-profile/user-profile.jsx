import { useState } from 'react';

import userPhoto from '../../assets/images/user-photo.jpg';
import * as Profile from './style';

const UserProfile = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(false);

  return (
    <Profile.Main>
      <Profile.Header>
        <Profile.AvatarContainer>
          <Profile.Avatar src={userPhoto} />
        </Profile.AvatarContainer>
        <Profile.TitleContainer>
          <Profile.Title>Mary Stone</Profile.Title>
          <Profile.TitleButtons>
            <Profile.HeaderButton>Request a Change</Profile.HeaderButton>
            <Profile.HeaderButton>Gear</Profile.HeaderButton>
          </Profile.TitleButtons>
        </Profile.TitleContainer>
        <Profile.MainNavigation>
          <Profile.MainNavigationItem
            onClick={() => setActiveMenuItem(true)}
            active={activeMenuItem}
          >
            Personal
          </Profile.MainNavigationItem>
          <Profile.MainNavigationItem>Job</Profile.MainNavigationItem>
          <Profile.MainNavigationItem>Time Off</Profile.MainNavigationItem>
          <Profile.MainNavigationItem>Emergency</Profile.MainNavigationItem>
          <Profile.MainNavigationItem>Documents</Profile.MainNavigationItem>
          <Profile.MainNavigationItem>Notes</Profile.MainNavigationItem>
          <Profile.MainNavigationItem>Benefits</Profile.MainNavigationItem>
          <Profile.MainNavigationItem>Training</Profile.MainNavigationItem>
          <Profile.MainNavigationItem>Assets</Profile.MainNavigationItem>
          <Profile.MainNavigationItem>More</Profile.MainNavigationItem>
        </Profile.MainNavigation>
      </Profile.Header>
      <Profile.AsideNav>
        <Profile.AsideMenuBlock>
          <Profile.AsideMenuItem>
            <svg height="16" viewBox="0 0 48 48" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#9a9a9a"
                d="M31 2h-16c-2.76 0-5 2.24-5 5v34c0 2.76 2.24 5 5 5h16c2.76 0 5-2.24 5-5v-34c0-2.76-2.24-5-5-5zm-8 42c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-8h-18v-28h18v28z"
              />
              <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
            <Profile.AsideMenuItemText>07911 654321</Profile.AsideMenuItemText>
          </Profile.AsideMenuItem>
          <Profile.AsideMenuItem>
            <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <title />
              <g id="mail">
                <path
                  fill="#9a9a9a"
                  d="M29,6H3L2.92,6a.78.78,0,0,0-.21,0l-.17.07a.65.65,0,0,0-.15.1.67.67,0,0,0-.15.14l-.06.06a.36.36,0,0,0,0,.09,1.08,1.08,0,0,0-.08.19A1.29,1.29,0,0,0,2,6.9S2,7,2,7V25a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V7A1,1,0,0,0,29,6ZM16,14.81,6.2,8H27.09ZM4,24V8.91l11.43,7.91,0,0a1.51,1.51,0,0,0,.18.09l.08,0A1.09,1.09,0,0,0,16,17h0a1,1,0,0,0,.41-.1l.07,0,0,0L28,9.79V24Z"
                />
              </g>
            </svg>
            <svg height="16" viewBox="0 0 17 17" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.0142 0.965088H2.51824C1.92097 0.965088 1.34816 1.20235 0.925831 1.62468C0.503499 2.04702 0.266235 2.61982 0.266235 3.21709V14.7131C0.266235 15.3104 0.503499 15.8832 0.925831 16.3055C1.34816 16.7278 1.92097 16.9651 2.51824 16.9651H14.0142C14.6115 16.9651 15.1843 16.7278 15.6066 16.3055C16.029 15.8832 16.2662 15.3104 16.2662 14.7131V3.21709C16.2662 2.61982 16.029 2.04702 15.6066 1.62468C15.1843 1.20235 14.6115 0.965088 14.0142 0.965088ZM5.60024 13.7491C5.60024 13.7891 5.57324 13.8491 5.52024 13.9301C5.44024 13.9841 5.37924 14.0101 5.33924 14.0101H3.48924C3.44924 14.0101 3.38924 13.9841 3.30924 13.9301C3.25524 13.8501 3.22824 13.7901 3.22824 13.7491V7.25509C3.22824 7.21509 3.25524 7.15509 3.30824 7.07509C3.38824 7.02109 3.44824 6.99409 3.48924 6.99409H5.33924C5.37924 6.99409 5.43924 7.02109 5.51924 7.07409C5.57324 7.15409 5.60024 7.21409 5.60024 7.25509V13.7491ZM5.29924 5.88809C5.18426 6.00567 5.04642 6.09845 4.89421 6.16071C4.742 6.22297 4.57865 6.25339 4.41424 6.25009C4.06524 6.25009 3.77124 6.13009 3.52924 5.88809C3.41161 5.77315 3.31879 5.63532 3.25653 5.4831C3.19427 5.33088 3.16388 5.16751 3.16724 5.00309C3.16724 4.66809 3.28824 4.38009 3.52924 4.13909C3.64292 4.01844 3.78007 3.92231 3.93226 3.85661C4.08445 3.79091 4.24847 3.75701 4.41424 3.75701C4.58 3.75701 4.74402 3.79091 4.89621 3.85661C5.0484 3.92231 5.18555 4.01844 5.29924 4.13909C5.53924 4.37909 5.66024 4.66909 5.66024 5.00309C5.66024 5.35209 5.54024 5.64709 5.29924 5.88809ZM13.4612 13.7491C13.4609 13.7831 13.4537 13.8167 13.4399 13.8478C13.4262 13.879 13.4062 13.907 13.3812 13.9301C13.3581 13.955 13.3301 13.975 13.299 13.9888C13.2679 14.0025 13.2343 14.0098 13.2002 14.0101H11.3102C11.2702 14.0101 11.2102 13.9841 11.1302 13.9301C11.0762 13.8501 11.0492 13.7901 11.0492 13.7491V9.78909C11.0492 9.45309 10.9892 9.19209 10.8682 9.00409C10.7202 8.84409 10.4792 8.76409 10.1442 8.76409C9.71524 8.76409 9.40724 8.89009 9.21924 9.14509C9.04524 9.40009 8.95824 9.76209 8.95824 10.2311V13.7491C8.95792 13.7831 8.95066 13.8167 8.93691 13.8478C8.92315 13.879 8.90319 13.907 8.87824 13.9301C8.85498 13.9552 8.82683 13.9752 8.79553 13.989C8.76423 14.0027 8.73043 14.0099 8.69624 14.0101H6.84624C6.80624 14.0101 6.74623 13.9841 6.66623 13.9301C6.61224 13.8501 6.58624 13.7901 6.58624 13.7491V7.25509C6.58624 7.21509 6.61224 7.15509 6.66623 7.07509C6.74623 7.02109 6.80624 6.99409 6.84624 6.99409H8.63624C8.69024 6.99409 8.74323 7.00709 8.79624 7.03409C8.82423 7.04809 8.85124 7.09409 8.87724 7.17409V7.27509L8.89723 7.31509V7.47609C9.34023 7.04809 9.95024 6.83309 10.7272 6.83309C11.5982 6.83309 12.2682 7.04109 12.7372 7.45609C13.2202 7.89809 13.4612 8.53609 13.4612 9.36609V13.7491Z"
                fill="#9a9a9a"
              />
            </svg>
            <svg
              enableBackground="new 0 0 32 32"
              height="16px"
              id="Layer_1"
              version="1.0"
              viewBox="0 0 32 32"
              width="16px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.993,6.077C30.816,6.6,29.552,6.953,28.223,7.11c1.355-0.812,2.396-2.098,2.887-3.63  c-1.269,0.751-2.673,1.299-4.168,1.592C25.744,3.797,24.038,3,22.149,3c-3.625,0-6.562,2.938-6.562,6.563  c0,0.514,0.057,1.016,0.169,1.496C10.301,10.785,5.465,8.172,2.227,4.201c-0.564,0.97-0.888,2.097-0.888,3.3  c0,2.278,1.159,4.286,2.919,5.464c-1.075-0.035-2.087-0.329-2.972-0.821c-0.001,0.027-0.001,0.056-0.001,0.082  c0,3.181,2.262,5.834,5.265,6.437c-0.55,0.149-1.13,0.23-1.729,0.23c-0.424,0-0.834-0.041-1.234-0.117  c0.834,2.606,3.259,4.504,6.13,4.558c-2.245,1.76-5.075,2.811-8.15,2.811c-0.53,0-1.053-0.031-1.566-0.092  C2.905,27.913,6.355,29,10.062,29c12.072,0,18.675-10.001,18.675-18.675c0-0.284-0.008-0.568-0.02-0.85  C30,8.55,31.112,7.395,31.993,6.077z"
                fill="#9a9a9a"
              />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
            <svg
              enableBackground="new 0 0 32 32"
              height="16px"
              id="Layer_1"
              version="1.0"
              viewBox="0 0 32 32"
              width="16px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
                  fill="#9a9a9a"
                />
                <path
                  d="M22,32V20h4l1-5h-5v-2c0-2,1.002-3,3-3h2V5c-1,0-2.24,0-4,0c-3.675,0-6,2.881-6,7v3h-4v5h4v12H22z"
                  fill="#FFFFFF"
                  id="f"
                />
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
          </Profile.AsideMenuItem>
        </Profile.AsideMenuBlock>
        <Profile.AsideMenuBlock>
          <Profile.AsideMenuItemTitle>Hire Date</Profile.AsideMenuItemTitle>
          <Profile.AsideMenuItemSubtitle>Sep 30, 2017</Profile.AsideMenuItemSubtitle>
          <Profile.AsideMenuItemText>3y-6m-20d</Profile.AsideMenuItemText>
        </Profile.AsideMenuBlock>
        <Profile.AsideMenuBlock>
          <Profile.AsideMenuItemText>5</Profile.AsideMenuItemText>
          <Profile.AsideMenuItemText>Full-Time</Profile.AsideMenuItemText>
          <Profile.AsideMenuItemText>Operations</Profile.AsideMenuItemText>
          <Profile.AsideMenuItemText>Europe</Profile.AsideMenuItemText>
          <Profile.AsideMenuItemText>London, UK</Profile.AsideMenuItemText>
        </Profile.AsideMenuBlock>
        <Profile.AsideMenuBlock>
          <Profile.AsideMenuItemTitle>Direct Reports</Profile.AsideMenuItemTitle>
          <Profile.AsideMenuItem>
            <svg
              height="16px"
              width="16px"
              enableBackground="new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="info" />
              <g id="icons">
                <path
                  fill="#9a9a9a"
                  d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,4c2.2,0,4,2.2,4,5s-1.8,5-4,5   s-4-2.2-4-5S9.8,4,12,4z M18.6,19.5C16.9,21,14.5,22,12,22s-4.9-1-6.6-2.5c-0.4-0.4-0.5-1-0.1-1.4c1.1-1.3,2.6-2.2,4.2-2.7   c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6c1.7,0.5,3.1,1.4,4.2,2.7C19.1,18.5,19.1,19.1,18.6,19.5z"
                  id="user2"
                />
              </g>
            </svg>
            <Profile.AsideMenuItemText>Cheryl Barnet</Profile.AsideMenuItemText>
          </Profile.AsideMenuItem>
          <Profile.AsideMenuItem>
            <svg
              height="16px"
              width="16px"
              enableBackground="new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="info" />
              <g id="icons">
                <path
                  fill="#9a9a9a"
                  d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,4c2.2,0,4,2.2,4,5s-1.8,5-4,5   s-4-2.2-4-5S9.8,4,12,4z M18.6,19.5C16.9,21,14.5,22,12,22s-4.9-1-6.6-2.5c-0.4-0.4-0.5-1-0.1-1.4c1.1-1.3,2.6-2.2,4.2-2.7   c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6c1.7,0.5,3.1,1.4,4.2,2.7C19.1,18.5,19.1,19.1,18.6,19.5z"
                  id="user2"
                />
              </g>
            </svg>
            <Profile.AsideMenuItemText>Daniel Vance</Profile.AsideMenuItemText>
          </Profile.AsideMenuItem>
          <Profile.AsideMenuItem>
            <svg
              height="16px"
              width="16px"
              enableBackground="new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="info" />
              <g id="icons">
                <path
                  fill="#9a9a9a"
                  d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,4c2.2,0,4,2.2,4,5s-1.8,5-4,5   s-4-2.2-4-5S9.8,4,12,4z M18.6,19.5C16.9,21,14.5,22,12,22s-4.9-1-6.6-2.5c-0.4-0.4-0.5-1-0.1-1.4c1.1-1.3,2.6-2.2,4.2-2.7   c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6c1.7,0.5,3.1,1.4,4.2,2.7C19.1,18.5,19.1,19.1,18.6,19.5z"
                  id="user2"
                />
              </g>
            </svg>
            <Profile.AsideMenuItemText>Dorothy Chou</Profile.AsideMenuItemText>
          </Profile.AsideMenuItem>
          <Profile.AsideMenuItem>
            <svg
              height="16px"
              width="16px"
              enableBackground="new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="info" />
              <g id="icons">
                <path
                  fill="#9a9a9a"
                  d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,4c2.2,0,4,2.2,4,5s-1.8,5-4,5   s-4-2.2-4-5S9.8,4,12,4z M18.6,19.5C16.9,21,14.5,22,12,22s-4.9-1-6.6-2.5c-0.4-0.4-0.5-1-0.1-1.4c1.1-1.3,2.6-2.2,4.2-2.7   c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6c1.7,0.5,3.1,1.4,4.2,2.7C19.1,18.5,19.1,19.1,18.6,19.5z"
                  id="user2"
                />
              </g>
            </svg>
            <Profile.AsideMenuItemText>Eric Pasture</Profile.AsideMenuItemText>
          </Profile.AsideMenuItem>
          <Profile.AsideMenuItem>
            <svg
              height="16px"
              width="16px"
              enableBackground="new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="info" />
              <g id="icons">
                <path
                  fill="#9a9a9a"
                  d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24,5.4,18.6,0,12,0z M12,4c2.2,0,4,2.2,4,5s-1.8,5-4,5   s-4-2.2-4-5S9.8,4,12,4z M18.6,19.5C16.9,21,14.5,22,12,22s-4.9-1-6.6-2.5c-0.4-0.4-0.5-1-0.1-1.4c1.1-1.3,2.6-2.2,4.2-2.7   c0.8,0.4,1.6,0.6,2.5,0.6s1.7-0.2,2.5-0.6c1.7,0.5,3.1,1.4,4.2,2.7C19.1,18.5,19.1,19.1,18.6,19.5z"
                  id="user2"
                />
              </g>
            </svg>
            <Profile.AsideMenuItemText>Jake Ryan</Profile.AsideMenuItemText>
          </Profile.AsideMenuItem>
          <Profile.AsideMenuItem>
            <svg
              height="16px"
              width="16px"
              enableBackground="new 0 0 24 24"
              id="Layer_1"
              version="1.0"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path
                    fill="#9a9a9a"
                    d="M16.5,14c-1.5,0-2.7,0.4-3.6,0.9c1.4,1.2,2,2.6,2.1,2.7l0.1,0.2V20h8v-2C23,18,21.4,14,16.5,14z"
                  />
                </g>
                <g>
                  <circle fill="#9a9a9a" cx="16.5" cy="8.5" r="3.5" />
                </g>
              </g>
              <g>
                <path
                  fill="#9a9a9a"
                  d="M4,8.5C4,6.6,5.6,5,7.5,5S11,6.6,11,8.5c0,1.9-1.6,3.5-3.5,3.5S4,10.4,4,8.5z M7.5,14C2.6,14,1,18,1,18v2h13v-2   C14,18,12.4,14,7.5,14z"
                />
              </g>
            </svg>
            <Profile.AsideMenuItemText>4 more...</Profile.AsideMenuItemText>
          </Profile.AsideMenuItem>
        </Profile.AsideMenuBlock>
      </Profile.AsideNav>
      <Profile.Board>BoardText</Profile.Board>
    </Profile.Main>
  );
};

export default UserProfile;

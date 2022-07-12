import { Route, Routes } from 'react-router-dom';
import {
  AsideMenu,
  Footer,
  Header,
  JobInfo,
  PersonalInfo,
  TimeOffInfo,
} from 'src/pages/user-profile/components';

import * as S from './styles';

const UserProfile = () => (
  <S.Main>
    <Header />
    <AsideMenu />
    <S.Board>
      <Routes>
        <Route path="personal" element={<PersonalInfo />} />
        <Route path="job" element={<JobInfo />} />
        <Route path="timeoff" element={<TimeOffInfo />} />
      </Routes>
    </S.Board>
    <Footer />
  </S.Main>
);

export default UserProfile;

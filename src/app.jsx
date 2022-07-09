import { Route, Routes } from 'react-router-dom';
import { images } from 'src/assets';
import { ExampleCommonComponent } from 'src/components';
import { UserProfile } from 'src/pages/index';

const App = () => (
  <Routes>
    <Route path="/" element={<ExampleCommonComponent />} />
    <Route path="profile/*" element={<UserProfile />} />
  </Routes>
);

export default App;

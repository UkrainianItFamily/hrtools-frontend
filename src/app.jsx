import { Route, Routes } from 'react-router-dom';
import { ExampleCommonComponent } from 'src/components';
import UserProfile from 'src/pages';

const App = () => (
  <Routes>
    <Route path="/" element={<ExampleCommonComponent />} />
    <Route path="profile/*" element={<UserProfile />} />
  </Routes>
);

export default App;

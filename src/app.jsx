import { Route, Routes } from 'react-router-dom';
import { ExampleCommonComponent } from 'src/components';
import UserProfile from 'src/pages';
import { Auth, NotFound } from 'src/pages';

const App = () => (
  <>
    <TestNav />
    <Routes>
      <Route path="/" element={<ExampleCommonComponent />} />
      <Route path="auth/*" element={<Auth />} />
      <Route path="profile/*" element={<UserProfile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;

import { Route, Routes } from 'react-router-dom';
import { ExampleCommonComponent, TestNav } from 'src/components';
import { Auth, NotFound } from 'src/pages';

const App = () => (
  <>
    <TestNav />
    <Routes>
      <Route path="/" element={<ExampleCommonComponent />} />
      <Route path="auth/*" element={<Auth />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;

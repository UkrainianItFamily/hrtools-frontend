import { Route, Routes } from 'react-router-dom';
import { Auth, MainPage, NotFound } from 'src/pages';

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="auth/*" element={<Auth />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default App;

import { Route, Routes } from 'react-router-dom';
import { Auth, MainPage, NotFound, Personal } from 'src/pages';

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="auth/*" element={<Auth />} />
    <Route path="Personal/*" element={<Personal />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default App;

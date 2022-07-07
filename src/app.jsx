import { Route, Routes } from 'react-router-dom';
import { ExampleCommonComponent, TestNav } from 'src/components';
import { Auth, NotFound } from 'src/pages';
import { ForgotPass, ResetPass, SignIn, SignUp } from 'src/pages/auth/components';

const App = () => (
  <>
    <TestNav />
    <Routes>
      <Route path="/" element={<ExampleCommonComponent />} />
      <Route path="auth" element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-pass" element={<ForgotPass />} />
        <Route path="reset-pass" element={<ResetPass />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;

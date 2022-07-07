import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { ExampleCommonComponent, TestNav } from 'src/components';
import { ForgotPass, ResetPass, SignIn, SignUp } from 'src/components/auth/components';
import { AuthPage, NotFound } from 'src/pages';

const theme = createTheme({
  palette: {
    primary: {
      main: '#73c41d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#969797',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <TestNav />
    <Routes>
      <Route path="/" element={<ExampleCommonComponent />} />
      <Route path="auth" element={<AuthPage />}>
        <Route index element={<SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-pass" element={<ForgotPass />} />
        <Route path="reset-pass" element={<ResetPass />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </ThemeProvider>
);

export default App;

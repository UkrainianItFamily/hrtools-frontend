import { Global } from '@emotion/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from 'src/global-styles';
import { store } from 'src/store/store';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Global styles={GlobalStyles} />
        <App />
      </Router>
    </Provider>
  </StrictMode>,
);

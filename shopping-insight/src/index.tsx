import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as RTKProvider } from 'react-redux';
import App from './App';
import GlobalStyle from './styles/globalStyles';
import store from './redux/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <RTKProvider store={store}>
    <GlobalStyle />
    <App />
  </RTKProvider>,
);

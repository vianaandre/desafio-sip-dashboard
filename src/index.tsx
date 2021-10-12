import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/global';
import { MenuAside } from './components/MenuAside';

ReactDOM.render(
  <React.StrictMode>
    <MenuAside />
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

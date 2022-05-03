import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import GlobalStyles from './tools/styles/globalStyles';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
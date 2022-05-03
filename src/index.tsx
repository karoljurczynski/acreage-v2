import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import GlobalStyles from './tools/styles/globalStyles';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    <GlobalStyles />

  </React.StrictMode>
);
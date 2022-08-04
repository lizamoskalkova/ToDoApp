import { Grid } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Routes from './Routes/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);


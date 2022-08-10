import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Routes from './Routes/Routes';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.Fragment>
);


import ReactDOM from 'react-dom/client';
import Routes from './Routes/Routes';
import { store } from './Store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
};

export default App;


import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
// router
import { BrowserRouter as Router } from 'react-router-dom';
// store
import { store } from 'store';
// layouts
import { MainLayout } from 'layouts';
// routes
import { Routes } from './routes';
// css
import './index.css';

const App = () => {
  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  );
};

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

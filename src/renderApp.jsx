import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import initStore from './redux/store';

import App from './components/App';

const store = initStore();

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

export default renderApp;


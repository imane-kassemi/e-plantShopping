import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store.js'; // Import the configured Redux store

ReactDOM.render(
  <Provider store={store}> {/* Wrapping the App component with the Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './routers/Dashboard';
import { store } from './store/store';

export const App =() => {
  return (
    <Provider store={store}>
      <Dashboard/>
    </Provider>
  );
}


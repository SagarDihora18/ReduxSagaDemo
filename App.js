import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/Store';
import Home from './src/screens/Home';

const store = configureStore()

export default function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );

}

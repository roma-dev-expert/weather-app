import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <BackgroundImage />
      </div>
    </Provider>
  );
};

export default App;
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
import WeatherPanel from './components/WeatherPanel';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <BackgroundImage />
		<WeatherPanel />
      </div>
    </Provider>
  );
};

export default App;
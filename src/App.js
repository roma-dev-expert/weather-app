import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
import WeatherPanelContainer from './containers/WeatherPanelContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <BackgroundImage />
		<WeatherPanelContainer />
      </div>
    </Provider>
  );
};

export default App;
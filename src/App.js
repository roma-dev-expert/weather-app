import React, { useEffect } from 'react';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import WeatherPanelContainer from './containers/WeatherPanelContainer';
import InitializeAppData from './utils/startupData'; 
import BackgroundImageContainer from './containers/BackgroundImageContainer';

const App = () => {
	useEffect(() => {
		InitializeAppData();
	  }, []);
  return (
    <div className="app">
      <Header />
      <BackgroundImageContainer />
      <WeatherInfo />
      <WeatherPanelContainer />
    </div>
  );
};

export default App;

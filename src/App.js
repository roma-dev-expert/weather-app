import React from 'react';
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import WeatherPanelContainer from './containers/WeatherPanelContainer';
import BackgroundImageContainer from './containers/BackgroundImageContainer';


const App = () => {
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

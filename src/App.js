
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';

import BackgroundImageContainer from './containers/BackgroundImageContainer';

import React from 'react';
import WeatherPanelContainer from './containers/WeatherPanelContainer';


const App = () => {
	return (
	  <div className="app">	
		<BackgroundImageContainer>
			<Header />
			<WeatherInfo />
			<WeatherPanelContainer/>
		</BackgroundImageContainer>
	  </div>
	);
  };
  
  export default App;

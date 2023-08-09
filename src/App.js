import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import WeatherPanelContainer from './containers/WeatherPanelContainer';
import InitializeAppData from './utils/startupData'; 
import BackgroundImageContainer from './containers/BackgroundImageContainer';


const App = () => {
	const dispatch = useDispatch();
  
	useEffect(() => {
	  const initializeApp = async () => {
		try {
		  await InitializeAppData(dispatch);
		} catch (error) {
		  console.error('Error initializing app:', error);
		}
	  };
  
	  initializeApp();
	}, [dispatch]);
  
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

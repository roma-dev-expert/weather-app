import useWeatherService from '../services/weatherService';

const InitializeAppData = async (dispatch, state) => {
  try {
	const weatherService = useWeatherService(dispatch, state); 
	await weatherService.updateWeatherData();
  } catch (error) {
    console.error('Error initializing app data:', error);
  }
};

export default InitializeAppData;
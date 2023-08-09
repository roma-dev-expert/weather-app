import useWeatherService from '../services/weatherService';

const InitializeAppData = async (dispatch) => {
  try {
	const weatherService = useWeatherService(dispatch); 

    const regionName = 'Tashkent';
	await weatherService.updateWeatherData(regionName);
  } catch (error) {
    console.error('Error initializing app data:', error);
  }
};

export default InitializeAppData;
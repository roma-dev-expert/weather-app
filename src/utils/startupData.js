import useWeatherService from '../services/weatherService';

const InitializeAppData = async (dispatch) => {
  try {
	const weatherService = useWeatherService(dispatch); 

    const cityName = 'Tashkent';
    const countryCode = 'UZ';
	await weatherService.updateWeatherData(cityName, countryCode);
  } catch (error) {
    console.error('Error initializing app data:', error);
  }
};

export default InitializeAppData;
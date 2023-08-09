import { fetchCityCoordinates, fetchWeatherData } from '../api';
import { setWeatherData } from '../actions/weatherActions';


const updateWeatherData = async (dispatch, regionName) => {
	try {
	const geoData = await fetchCityCoordinates(regionName);
	if (geoData.length > 0) {
		const lat = geoData[0].lat;
		const lon = geoData[0].lon;

		const weatherResponse = await fetchWeatherData(lat, lon);
		dispatch(setWeatherData({ ...weatherResponse }));
	} else {
		console.error('City not found');
	}
	} catch (error) {
	console.error('Error updating weather data:', error);
	throw error;
	}
};

export default updateWeatherData;
  
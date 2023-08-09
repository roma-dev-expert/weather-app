import updateWeatherData from '../services/weatherService';

const InitializeAppData = async (dispatch, state) => {
  try {
	const regionName = state.regionData.selectedRegion;
	await updateWeatherData(dispatch, regionName);
  } catch (error) {
    console.error('Error initializing app data:', error);
  }
};

export default InitializeAppData;
const fetchCityCoordinates = async (cityName, countryCode) => {
	const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

	try {
	  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=${apiKey}`);
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching city coordinates:', error);
	  throw error;
	}
  };
  
  export { fetchCityCoordinates };
  
const fetchCityCoordinates = async (region) => {
	const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

	try {
	  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${region}&appid=${apiKey}`);
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching city coordinates:', error);
	  throw error;
	}
  };
  
  export { fetchCityCoordinates };
  
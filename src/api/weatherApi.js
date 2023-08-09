const fetchWeatherData = async (lat, lon) => {
	try {
	  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
	  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching weather data:', error);
	  throw error;
	}
  };
  
  export { fetchWeatherData };
  
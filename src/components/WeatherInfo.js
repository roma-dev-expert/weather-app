import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun, faCloud, faCloudRain } from '@fortawesome/free-solid-svg-icons'; 
import './WeatherInfo.css';

const WeatherInfo = () => {
  const state = useSelector((state) => state);
  const weatherData = state.weatherData;
  const weatherState = weatherData.weather[0].main;
  const temperature = kelvinToCelsius(weatherData.main.temp);
  const regionName = state.regionData.selectedRegion;

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
	const intervalId = setInterval(() => {
	  setCurrentDateTime(new Date());
	}, 1000);
  
	return () => {
	  clearInterval(intervalId);
	};
  }, []);

  function kelvinToCelsius(kelvin) {
	return Math.round(kelvin - 273.15);
  }

  const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
	  case 'clear':
		return <FontAwesomeIcon icon={faSun} />;
      case 'clouds':
        return <FontAwesomeIcon icon={faCloud} />;
      case 'rain':
        return <FontAwesomeIcon icon={faCloudRain} />;
      default:
        return null;
    }
  };

  return (
    <div className="weather-info">
      <div className="temperature">{temperature}°C</div>
      <div className="city-date-container">
        <p className="city">{regionName}</p>
        <p className="date">{format(currentDateTime, "HH:mm - eeee, d MMM ''yy")}</p>
      </div>
	  <div className="weather-state">
          {getWeatherIcon(weatherState.toLowerCase())}
		  {weatherState}
	  </div>
    </div>
  );
};

export default WeatherInfo;

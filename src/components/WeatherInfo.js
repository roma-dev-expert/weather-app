import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun, faCloud, faCloudRain } from '@fortawesome/free-solid-svg-icons'; 
import './WeatherInfo.css';

const WeatherInfo = () => {

  const temperature = '26°';
  const city = 'Tashkent';
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const weatherState = 'sunny';

  useEffect(() => {
	const intervalId = setInterval(() => {
	  setCurrentDateTime(new Date());
	}, 1000);
  
	return () => {
	  clearInterval(intervalId);
	};
  }, []);

  const getWeatherIcon = (state) => {
    switch (state) {
      case 'sunny':
        return <FontAwesomeIcon icon={faSun} />;
      case 'cloudy':
        return <FontAwesomeIcon icon={faCloud} />;
      case 'rainy':
        return <FontAwesomeIcon icon={faCloudRain} />;
      default:
        return null;
    }
  };

  return (
    <div className="weather-info">
      <div className="temperature">{temperature}</div>
      <div className="city-date-container">
        <p className="city">{city}</p>
        <p className="date">{format(currentDateTime, "HH:mm - eeee, d MMM ''yy")}</p>
      </div>
	  <div className="weather-state">
          {getWeatherIcon(weatherState)}
		  {weatherState}
	  </div>
    </div>
  );
};

export default WeatherInfo;

import React from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSun, faCloud, faCloudRain } from '@fortawesome/free-solid-svg-icons'; 
import './WeatherInfo.css';

const WeatherInfo = () => {

  const temperature = '26°';
  const city = 'Tashkent';
  const currentDate = new Date();
  const formattedDate = format(currentDate, "HH:mm - eeee, d MMM ''yy");
  const weatherState = 'sunny';

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
        <p className="date">{formattedDate}</p>
      </div>
	  <div className="weather-state">
          {getWeatherIcon(weatherState)}
		  {weatherState}
	  </div>
    </div>
  );
};

export default WeatherInfo;

import React from 'react';
import { useSelector } from 'react-redux';
import './WeatherDetails.css';

const WeatherDetails = () => {
	
  const state = useSelector((state) => state);
  const weatherData = state.weatherData;

  const weatherDetails = [
    { label: 'Cloudy', value: weatherData.clouds.all },
    { label: 'Humidity', value: weatherData.main.humidity+'%' },
    { label: 'Wind', value: weatherData.wind.speed+ 'km/h' },
    { label: 'Rain', value: '20%' },
  ];

  return (
    <div className="weather-details">
	  <h2 className="details-heading">Weather Details</h2>
      <ul>
        {weatherDetails.map((detail, index) => (
          <li key={index} className="detail-item">
            <span className="detail-label">{detail.label}:</span>
            <span className="detail-value">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDetails;

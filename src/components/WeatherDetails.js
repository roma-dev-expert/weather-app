import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = () => {
  const weatherDetails = [
    { label: 'Cloudy', value: 'Cloudy' },
    { label: 'Humidity', value: '60%' },
    { label: 'Wind', value: '10 km/h' },
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

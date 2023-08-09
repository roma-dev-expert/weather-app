import React from 'react';
import RegionList from './RegionList';
import WeatherDetails from './WeatherDetails';
import './WeatherPanel.css';

const WeatherPanel = () => {
  return (
    <div className="weather-panel">
      <RegionList />
      <WeatherDetails />
    </div>
  );
};

export default WeatherPanel;

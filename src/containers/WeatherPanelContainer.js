import React from 'react';
import RegionList from '../components/RegionList';
import WeatherDetails from '../components/WeatherDetails';
import './WeatherPanelContainer.css';

const WeatherPanelContainer = () => {
  return (
    <div className="weather-panel">
      <RegionList />
      <WeatherDetails />
    </div>
  );
};

export default WeatherPanelContainer;

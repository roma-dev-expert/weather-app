import React from 'react';
import RegionList from './RegionList';
import WeatherDetails from './WeatherDetails';
import './WeatherPanel.css';

const WeatherPanel = (props) => {
  return (
    <div className={`weather-panel${!props.isWeatherPanelOpen ? ' closed' : ''}`}>
      <RegionList regions={props.regions} selectedRegion={props.selectedRegion} onRegionChange={props.handleRegionChange} />
      <WeatherDetails />
    </div>
  );
};

export default WeatherPanel;

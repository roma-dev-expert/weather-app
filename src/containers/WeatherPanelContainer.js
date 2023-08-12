import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRegion } from '../actions/regionActions';
import updateWeatherData from '../services/weatherService';
import './WeatherPanelContainer.css';
import WeatherPanel from './../components/WeatherPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';


const WeatherPanelContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const regions = state.regionData.regions;
  const selectedRegion = state.regionData.selectedRegion;
  const [isWeatherPanelOpen, setIsWeatherPanelOpen] = useState(false);

  const toggleWeatherPanel = () => {
    setIsWeatherPanelOpen(!isWeatherPanelOpen);
  };

  const handleRegionChange = async (regionName) => {
	if(regionName === "") return;
    dispatch(setSelectedRegion(regionName));
	await updateWeatherData(dispatch, regionName);
  };
  return (
	<div className="weather-panel-container">
		<button className={`toggle-button${isWeatherPanelOpen ? ' close' : ''}`} onClick={toggleWeatherPanel}>
			<FontAwesomeIcon icon={isWeatherPanelOpen ? faTimes : faArrowLeft} />
		</button>
		<WeatherPanel 
			isWeatherPanelOpen={isWeatherPanelOpen}
			regions={regions}
			selectedRegion={selectedRegion}
			handleRegionChange={handleRegionChange}
		/>
    </div>
  );
};

export default WeatherPanelContainer;

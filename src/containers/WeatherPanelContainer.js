import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRegion } from '../actions/regionActions';
import RegionList from '../components/RegionList';
import WeatherDetails from '../components/WeatherDetails';
import updateWeatherData from '../services/weatherService';
import './WeatherPanelContainer.css';

const WeatherPanelContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const regions = state.regionData.regions;
  const selectedRegion = state.regionData.selectedRegion;

  const handleRegionChange = async (regionName) => {
	if(regionName === "") return;
    dispatch(setSelectedRegion(regionName));
	await updateWeatherData(dispatch, regionName);
  };
  return (
    <div className="weather-panel">
      <RegionList regions={regions} selectedRegion={selectedRegion} onRegionChange={handleRegionChange} />
      <WeatherDetails />
    </div>
  );
};

export default WeatherPanelContainer;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRegion } from '../actions/regionActions';
import RegionList from '../components/RegionList';
import WeatherDetails from '../components/WeatherDetails';
import './WeatherPanelContainer.css';

const WeatherPanelContainer = () => {
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.regionData.regions);
  const selectedRegion = useSelector((state) => state.regionData.selectedRegion);

  const handleRegionChange = (regionName) => {
    dispatch(setSelectedRegion(regionName));
  };
  return (
    <div className="weather-panel">
      <RegionList regions={regions} selectedRegion={selectedRegion} onRegionChange={handleRegionChange} />
      <WeatherDetails />
    </div>
  );
};

export default WeatherPanelContainer;

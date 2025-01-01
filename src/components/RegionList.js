import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './RegionList.css';

const RegionList = ({ regions, selectedRegion, onRegionChange }) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleButtonClick = async () => {
    setIsButtonClicked(true);
    await onRegionChange(searchValue);
    setTimeout(() => setIsButtonClicked(false), 300);
  };

  const clearSearchResults = () => {
    setSearchValue('');
  };

  const handleRegionClick = async (regionName) => {
    await onRegionChange(regionName);
    clearSearchResults();
  };

  return (
    <div className="region-list">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Another location" 
          className="search-input" 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} 
        />
        <button 
          className={`search-button${isButtonClicked ? ' clicked' : ''}`} 
          onClick={handleButtonClick} 
          onMouseDown={() => setIsButtonClicked(true)}
        >
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </div>
      <ul className="region-list">
        {regions.map((region, index) => (
          <li 
            key={index} 
            className={`region-item ${selectedRegion === region.name ? 'selected' : ''}`}
            onClick={() => handleRegionClick(region.name)}
          >
            {region.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionList;

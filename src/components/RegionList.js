import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './RegionList.css';

const RegionList = () => {
  const regions = ['Tashkent', 'Samarkand', 'Bukhara', 'Andijan', 'Fergana'];
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 300);
  };

  return (
    <div className="region-list">
	  <div className="search-container">
        <input type="text" placeholder="Another location" className="search-input" />
        <button className={`search-button${isButtonClicked ? ' clicked' : ''}`} onClick={handleButtonClick} onMouseDown={handleButtonClick}>
			<FontAwesomeIcon icon={faSearch} className="search-icon" />
		</button>
      </div>
      <ul>
        {regions.map((region, index) => (
          <li key={index}>{region}</li>
        ))}
      </ul>
    </div>
  );
};

export default RegionList;

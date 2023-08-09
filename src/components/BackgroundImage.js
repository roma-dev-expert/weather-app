import React from 'react';
import './BackgroundImage.css';

const BackgroundImage = ({ backgroundImageUrl }) => {

  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
    </div>
  );
};

export default BackgroundImage;

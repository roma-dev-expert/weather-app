import React from 'react';
import './BackgroundImage.css';

const BackgroundImage = ({backgroundImageUrl, children}) => {
  return <div className="background-image"  style={{ backgroundImage: `url(${backgroundImageUrl})`}}>{children}</div>;
};

export default BackgroundImage;

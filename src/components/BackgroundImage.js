import React from 'react';
import './BackgroundImage.css';

const BackgroundImage = ({ backgroundImageUrl }) => {

  return (
    <img className="background-image" src={backgroundImageUrl} alt=""/>
  );
};

export default BackgroundImage;

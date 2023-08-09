import React from 'react';
import { useSelector } from 'react-redux';
import BackgroundImage from '../components/BackgroundImage';

const BackgroundImageContainer = () => {
	
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  const getBackgroundImageUrl = (state) => {
    switch (state) {
      case 'clear':
        return '/images/sunny.jpg';
      case 'clouds':
        return '/images/cloudy.jpg';
      case 'rain':
        return '/images/rainy.jpg';
      default:
        return '/images/sunny.jpg';
    }
  };

  const backgroundImageUrl = getBackgroundImageUrl(weatherData.weatherState);

  return <BackgroundImage backgroundImageUrl={backgroundImageUrl} />;
};

export default BackgroundImageContainer;

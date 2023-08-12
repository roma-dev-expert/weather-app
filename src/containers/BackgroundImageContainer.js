import React from 'react';
import { useSelector } from 'react-redux';
import BackgroundImage from '../components/BackgroundImage';

const BackgroundImageContainer = ({children}) => {

  const weatherData = useSelector((state) => state.weatherData);
  const weatherState = weatherData?.weather?[0]?.main?.toLowerCase() : "";

  const getBackgroundImageUrl = (weatherState) => {
    switch (weatherState) {
      case 'clear':
        return './images/sunny.jpg';
      case 'clouds':
        return './images/cloudy.jpg';
      case 'rain':
        return './images/rainy.jpg';
      default:
        return './images/sunny.jpg';
    }
  };



  const backgroundImageUrl = getBackgroundImageUrl(weatherState);

  return <BackgroundImage children={children} backgroundImageUrl={backgroundImageUrl} />
};

export default BackgroundImageContainer;

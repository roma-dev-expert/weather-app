import React from 'react';
import { useSelector } from 'react-redux';
import BackgroundImage from '../components/BackgroundImage';

const BackgroundImageContainer = ({children}) => {

  const weatherData = useSelector((state) => state.weatherData);
  const weatherState = weatherData?.weather?[0]?.main?.toLowerCase() : "";

  const getBackgroundImageUrl = (weatherState) => {
    switch (weatherState) {
      case 'clear':
        return `${process.env.PUBLIC_URL}/images/sunny.jpg`;
      case 'clouds':
        return `${process.env.PUBLIC_URL}/images/cloudy.jpg`;
      case 'rain':
        return `${process.env.PUBLIC_URL}/images/rainy.jpg`;
      default:
        return `${process.env.PUBLIC_URL}/images/sunny.jpg`;
    }
  };



  const backgroundImageUrl = getBackgroundImageUrl(weatherState);

  return <BackgroundImage children={children} backgroundImageUrl={backgroundImageUrl} />
};

export default BackgroundImageContainer;

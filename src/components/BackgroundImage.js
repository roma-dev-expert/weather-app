import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData } from '../actions/weatherActions';
import './BackgroundImage.css';

const BackgroundImage = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherData.weatherData);

  useEffect(() => {
    setTimeout(() => {
      const mockWeatherData = {
        weatherState: 'sunny',
      };
      dispatch(setWeatherData(mockWeatherData));
    }, 2000);
  }, [dispatch]);

  const getBackgroundImageUrl = (state) => {
	switch (state) {
	  case 'sunny':
		return '/images/sunny.jpg';
	  case 'cloudy':
		return '/images/cloudy.jpg';
	  case 'rainy':
		return '/images/rainy.jpg';
	  default:
		return '/images/sunny.jpg';
	}
  };
  
  
  const backgroundImageUrl = getBackgroundImageUrl(weatherData.weatherState);

  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
    </div>
  );
};

export default BackgroundImage;

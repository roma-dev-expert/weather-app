import { SET_WEATHER_DATA } from '../store/weatherActionTypes';

export const setWeatherData = (data) => {
  return {
    type: SET_WEATHER_DATA,
    payload: data,
  };
};
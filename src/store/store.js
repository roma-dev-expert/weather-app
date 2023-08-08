import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../reducers/weatherReducer';

const rootReducer = {
  weatherData: weatherReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;

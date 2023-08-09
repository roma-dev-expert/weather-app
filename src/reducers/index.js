import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import regionReducer from './regionReducer';

const rootReducer = combineReducers({
  weatherData: weatherReducer,
  regionData: regionReducer,
});

export default rootReducer;

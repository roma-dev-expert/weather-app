import { SET_WEATHER_DATA } from '../store/weatherActionTypes';

const initialState = {
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return {
        ...state,
		...action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
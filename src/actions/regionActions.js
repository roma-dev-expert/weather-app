import { SET_SELECTED_REGION } from '../store/regionActionTypes';

export const setSelectedRegion = (regionName) => {
	return {
	  type: SET_SELECTED_REGION,
	  payload: regionName,
	};
  };
  
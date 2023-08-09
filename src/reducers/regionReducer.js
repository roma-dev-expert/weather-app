const initialState = {
	selectedRegion: 'Tashkent',
	regions: [
		{ name: 'Tashkent' },
		{ name: 'Andijan' },
		{ name: 'Bukhara' },
		{ name: 'Fergana' },
		{ name: 'Jizzakh' },
		{ name: 'Namangan' },
		{ name: 'Navoiy' },
		{ name: 'Kashkadarya' },
		{ name: 'Karakalpakstan' },
		{ name: 'Khorezm' },
		{ name: 'Samarqand' },
		{ name: 'Sirdaryo' },
		{ name: 'Surkhandarya' }
	],
  };
  
  const regionReducer = (state = initialState, action) => {
	switch (action.type) {
	  case 'SET_SELECTED_REGION':
		return {
		  ...state,
		  selectedRegion: action.payload,
		};
	  default:
		return state;
	}
  };
  
  export default regionReducer;
  
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';
import App from './App';
import InitializeAppData from './utils/startupData';


(async () => {
	try {	
	  const state = store.getState();
	  const dispatch = store.dispatch;
	  await InitializeAppData(dispatch, state);
	  
	  const rootElement = document.getElementById('root');
	  const root = ReactDOM.createRoot(rootElement);
  
	  root.render(
		<Provider store={store}>
		  <App />
		</Provider>
	  );
	} catch (error) {
	  console.error('Error initializing app:', error);
	}
  })();

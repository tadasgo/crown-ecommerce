import React from 'react';
import ReactDOM from 'react-dom';
// simulate routes
import { BrowserRouter } from 'react-router-dom';
// Component which we get from redux -> wrap everything so elements get access to it
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

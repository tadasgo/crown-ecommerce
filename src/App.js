import React from 'react';
import './App.css';
// switch loads first matched route
// route properties - exact (to check for exact or only part of the path), path, component
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;

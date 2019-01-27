import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './homepage';


const Main = () => (
	<HashRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				
			</Switch>
	</HashRouter>	
	
	
)

export default Main;
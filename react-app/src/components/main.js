import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './homepage';
import MainPage from './mainpage';

const Main = () => (
	<HashRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/main" component={MainPage} />
			</Switch>
	</HashRouter>	
	
	
)

export default Main;
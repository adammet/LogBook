import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './homepage';
import MainPage from './mainpage';
import OrganizationsPage from "./organizationspage";

const Main = () => (
	<HashRouter>
			<Switch>
				<Route exact path="/" component={OrganizationsPage} />
				<Route exact path="/main" component={MainPage} />
				<Route exact path="/organizations" component={OrganizationsPage} />
			</Switch>
	</HashRouter>	
)

export default Main;
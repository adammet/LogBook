import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {

	render() {
		
		return(

  <header>
  <ul className="home-main-nav">
        <div className="home-vertical">
            <li><Link to="/organizations" > Organizations</Link></li>
            <li><Link to="/tasks"> Tasks </Link></li>
            <li><Link to="/user"> User </Link></li>
            <li><Link to="/"> LogOut </Link></li>
          </div>
      </ul>
	
 </header>
  
		)
	}
}

export default MainPage;
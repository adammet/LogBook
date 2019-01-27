import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SettingsPage extends Component {

    render() {

        return(
            <header>
            <ul className="home-main-nav">
            <div className="home-vertical">
                <li><Link to="/main" > Main</Link></li>
                <li><Link to="/organizations/main"> Organizations </Link></li>
                <li><Link to="/tasks/main"> Tasks </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul>
          <div className="edit-info">
            <h1> User Settings </h1>
                <p>Change Email: </p>
                <input type="text" placeholder="new email"/>
                <p>Change Password: </p>
            <input type="text" placeholder="new password"/>
            <button><Link to="/main" > Save Changes</Link></button>
            </div>
            </header>
        )
    }
}

export default SettingsPage;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SettingsPage extends Component {

    render() {

        return(
            <header>
            <h1> User Settings </h1>
                <p>Change Email: </p>
                <input type="text" placeholder="new email"/>
                <p>Change Password: </p>
            <input type="text" placeholder="new password"/>
            </header>
        )
    }
}

export default SettingsPage;
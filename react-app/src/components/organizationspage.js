import React, { Component } from 'react';

var org_array = ['Edmund', 'Adam'];
var counter = 0;

class OrganizationsPage extends Component {

    render() {

        return(
            //TOP HEADER
            <header>
        <h1>All Organizations</h1>
                <button> {org_array[counter]} </button>
            </header>


        )
    }
}

export default OrganizationsPage;


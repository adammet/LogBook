import React, { Component } from 'react';



var org_array = ['Edmund', 'Adam'];
var counter = 0;

class OrganizationsPage extends Component {

    render() {

        return(
            //TOP HEADER
            <header>
        <h1>All Organizations</h1>
                <div>
                <button className = 'buttonAdam'> {org_array[counter]} </button>
                </div>
            </header>


        )
    }
}

export default OrganizationsPage;


import React, { Component } from 'react';

var org_array = ['Edmund'];
var next_org;

function organizations_buttons(org_array){
// Generates a button with the name of the organization for each organization that a user is a part of
    var num_of_orgs = org_array.length;
    var counter = 0;
    // var next_org;
    next_org = org_array[0];
    // while (counter < num_of_orgs){
    //     //     next_org = org_array[counter];
    //     //     {/*<button> next_org </button>;*/}
    //     //     // counter = counter + 1;
    //     // }
}

class OrganizationsPage extends Component {

    render() {
        organizations_buttons(org_array);
        return(
            //TOP HEADER
            <header>
        <h1>All Organizations</h1>
                <button> {next_org} </button>
            </header>

        )
    }
}

export default OrganizationsPage;


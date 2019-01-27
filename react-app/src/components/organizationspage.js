import React, { Component } from 'react';

var org_array = ['Edmund', 'Adam'];
var counter = 0;
var num_of_orgs = org_array.length;
var next_org;

function generatebuttons() {
    var arr = []
    for (var i = 0; i < num_of_orgs; i++) {
        arr.push(i)
    }
    return arr.map((i) => {
        return generatenextbutton(i)
    })
    // while (counter < num_of_orgs) {
    //     next_org = org_array[counter];
    //     generatenextbutton(counter);
    //     counter = counter + 1;
    // }
}

function generatenextbutton(counter){
    return (<button className='organization_button'> {org_array[counter]} </button>);
}



class OrganizationsPage extends Component {

    render() {

        return(
            <header>
        <h1>All Organizations</h1>
                <div className={'center-children'}>
                    {generatebuttons()}
                </div>
            </header>


        )
    }
}

export default OrganizationsPage;


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
}

function generatenextbutton(counter){
    return (<div> <div className="divider"/> <button className='organization_button'> {org_array[counter]} </button> </div>);
}



class OrganizationsPage extends Component {

    render() {

        return(
            <header>
                <div className={'center-children'}>
        <h1> All Organizations </h1>

                    {generatebuttons()}
                </div>
            </header>


        )
    }
}

export default OrganizationsPage;


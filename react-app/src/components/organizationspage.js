import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var org_array = ['Google', 'Microsoft', 'UBC 2019 W1 CPSC 310', 'UBC 2019 W1 CPEN 221'];
var num_of_orgs = org_array.length;

function generatebuttons() {
    var arr = [];
    for (var i = 0; i < num_of_orgs; i++) {
        arr.push(i)
    }
    return arr.map((i) => {
        return generatenextbutton(i)
    })
}
//
function generatenextbutton(counter){
    var button_name = String(org_array[counter])
    var link_name =  button_name.toLowerCase()
    return (<div> <div className="divider"/> <button className='standard_button'><Link to={link_name}> {button_name} </Link></button> </div>);
}



class OrganizationsPage extends Component {
    render() {
        if (this.props.match.params.id == "google"){
            return (<header>
                <ul className="home-main-nav">
            <div className="home-vertical">
                <li><Link to="/organizations/main" > Organizations</Link></li>
                <li><Link to="/tasks"> Tasks </Link></li>
                <li><Link to="/settings"> Settings </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul>  
                
        <h1> Google </h1>
                 
            </header>
            )
        }

        if (this.props.match.params.id == "microsoft"){
            return (<header>
                <ul className="home-main-nav">
            <div className="home-vertical">
                <li><Link to="/organizations/main" > Organizations</Link></li>
                <li><Link to="/tasks"> Tasks </Link></li>
                <li><Link to="/settings"> Settings </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul>  
                
        <h1> Microsoft </h1>
                 
            </header>
            )
        }

        if (this.props.match.params.id == "main"){
        return(
            <header>
            <ul className="home-main-nav">
            <div className="home-vertical">
                <li><Link to="/main" > Main</Link></li>
                <li><Link to="/tasks"> Tasks </Link></li>
                <li><Link to="/settings"> Settings </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul> 
                <div className={'center'}>
        <h1 className = {'headerfont'}> All Organizations </h1>
                    {generatebuttons()}
                </div>
            </header>
        )
    }
    }
}

export default OrganizationsPage;


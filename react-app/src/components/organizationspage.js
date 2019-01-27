import React, { Component } from 'react';
import { Link } from 'react-router-dom';


var org_array = ['Google', 'Microsoft', 'UBC-CPSC-343'];

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
                <li><Link to="/tasks/main"> Tasks </Link></li>
                <li><Link to="/settings"> Settings </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul>  
          <div className="org-info">           
        <h1> Google </h1>
        <div className='fade-in'>
            <div className="row">

            <div className="column">
            <div className="org"><h2>Your Groups at Google</h2></div>
              <div className="box">
                <Link to="/organizations/google">
                  <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"></img>
                <div className="detail">
                <div className="text"> Project Management</div>
                </div>
                </Link>
              </div>
              <div className="box">
                <Link to="/organizations/microsoft">
                  <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"></img>
                    <div className="detail">
                      <div className="text"> Human Resources </div>
                    </div>
                </Link>
              </div>
           
              
              
            </div>
            
            
          

        
        </div>
        </div>
                 </div>
            </header>
            )
        }

        if (this.props.match.params.id == "microsoft"){
            return (<header>
                <ul className="home-main-nav">
            <div className="home-vertical">
                <li><Link to="/organizations/main" > Organizations</Link></li>
                <li><Link to="/tasks/main"> Tasks </Link></li>
                <li><Link to="/settings"> Settings </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul>  
            <div className="org-info">      
        <h1> Microsoft </h1>
        <div className='fade-in'>
            <div className="row">

            <div className="column">
            <div className="org"><h2>Your Groups at Microsoft</h2></div>
              <div className="box">
                <Link to="/organizations/google">
                  <img src="https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"></img>
                <div className="detail">
                <div className="text"> QA Analysis</div>
                </div>
                </Link>
              </div>
           
              
              
            </div>
            
            
          

        
        </div>
        </div>
               </div>  
            </header>
            )
        }

        if (this.props.match.params.id == "main"){
        return(
            <header>
            <ul className="home-main-nav">
            <div className="home-vertical">
                <li><Link to="/main" > Main</Link></li>
                <li><Link to="/tasks/main"> Tasks </Link></li>
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
        if (this.props.match.params.id == "ubc-cpsc-343"){
            return (<header>
                    <ul className="home-main-nav">
                        <div className="home-vertical">
                            <li><Link to="/organizations/main" > Organizations</Link></li>
                            <li><Link to="/tasks"> Tasks </Link></li>
                            <li><Link to="/settings"> Settings </Link></li>
                            <li><Link to="/"> LogOut </Link></li>
                        </div>
                    </ul>

                    <h1> UBC CPSC 343 </h1>

                </header>
            )
        }
    }
}

export default OrganizationsPage;


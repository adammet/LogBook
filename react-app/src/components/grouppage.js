import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GroupPage extends Component {
  
  render() {
    if (this.props.match.params.id == "g-pm"){
    return(
      <header>
      <ul className="home-main-nav">
            <div className="home-vertical">
                <li><Link to="/organizations/main" > Organizations</Link></li>
                <li><Link to="/tasks/main"> Tasks </Link></li>
                <li><Link to="/settings"> Settings </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul>   
        <div className='fade-in'>
            <div className="row">

            <div className="column">
            <div className="org"><h2>Top Organizations</h2></div>
              <div className="box">
                <Link to="/organizations/google">
                  <img src="https://blog.hubspot.com/hubfs/image8-2.jpg"></img>
                <div className="detail">
                <div className="text"></div>
                </div>
                </Link>
              </div>
              <div className="box">
                <Link to="/organizations/microsoft">
                  <img src="https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"></img>
                    <div className="detail">
                      <div className="text"></div>
                    </div>
                </Link>
              </div>
           
              
              
            </div>
            
            <div className="column">
            
            
              <div className="box">

               <h2>Group Members</h2>

            <ul>
            <div className="main-task">
              <li>Wayne Glensky</li>
              <h3>Project Management</h3>
              
              <p1><Link to="tasks/1">grade</Link></p1>
             </div> 
             <div className="main-task"> 
              <li>Babe Ruth</li>
              <h3>Project Management</h3>
             
              <p1><Link to="tasks/2">grade</Link></p1>
              </div>
              <div className="main-task">
              <li> LeBron James </li>
              <h3>Project Management</h3>
              
              <p1><Link to="tasks/3">grade</Link></p1>
              </div>
              <div className="main-task">
              <li> Pete Peters </li>
              <h3> Project Management</h3>
              
              <p1><Link to="tasks/4">grade</Link></p1>
              </div>
            </ul>
 
              
               

             
             
            </div>
            
              
              

             
             
             
            </div>  
            
          

        
        </div>
        </div>
            
            
     </header>
    )
  }
}

}

export default GroupPage;
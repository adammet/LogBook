import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';

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
            </div>


            <div className='center'>
            <h1> Google | Project Management </h1>
            </div>

            <div className='row_group'>
            <div className="column">
                <div className="box">
                    <h2>Your Contributions</h2>
                    <ul>
                        <div className="main-task">
                            <li>Create Gantt Chart: 4 Points</li>
                            <h3>Complete</h3>

                        </div>
                        <div className="main-task">
                            <li>Find Critical Path: 1 Point</li>
                            <h3>Complete</h3>
                        </div>
                        <div className="main-task">
                            <li> Verify Project Budget: 25 Points </li>
                            <h3>Incomplete</h3>

                            <p1><Link to="tasks/3">view progress</Link></p1>
                        </div>
                    </ul>
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

                <div>
                    <h2> Your Total Point Progress: 5/50 Points</h2>
                    <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3"/>
                </div>
        </div>
      </div>
     </header>
    )
  }
}

}

export default GroupPage;
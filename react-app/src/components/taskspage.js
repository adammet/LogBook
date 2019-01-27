import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var tasks_array = ['Google: Verify project budget, 25 Points', 'UBC 2019 W1 CPSC 320: Finish part 3 of A4, 12 Points', "Microsoft: Install Tivoli Business Systems Manager ..., 95 Points", "Microsoft: Verify connectivity from production servers to ..., 11 Points" ];
var num_of_tasks = tasks_array.length;

function generatebuttons() {
    var arr = [];
    for (var i = 0; i < num_of_tasks; i++) {
        arr.push(i)
    }
    return arr.map((i) => {
        return generatenextbutton(i)
    })
}
//
function generatenextbutton(counter){
    return (<div> <div className="divider"/> <button className='standard_button'> {tasks_array[counter]} </button> </div>);
}

class TasksPage extends Component {
    render() {
        if (this.props.match.params.id == "1"){
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
                <h1> Task 1 </h1>
                </header>
                )
        }

        if (this.props.match.params.id == "2"){
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
                <h1> Task 2 </h1>
                </header>
                )
        }

        if (this.props.match.params.id == "3"){
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
                <h1> Task 3 </h1>
                </header>
                )
        }

        if (this.props.match.params.id == "4"){
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
                <h1> Task 3 </h1>
                </header>
                )
        }

        if (this.props.match.params.id == "main"){
            return(
            <header>
            <ul className="home-main-nav">
            <div className="home-vertical">
                <li><Link to="/main" > Main</Link></li>
                <li><Link to="/organizations/main"> Organizations </Link></li>
                <li><Link to="/settings"> Settings </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul>
                    <h1 className = {'headerfont'}> Your Upcoming Tasks </h1>
                    {generatebuttons()}
            </header>
        )
        }



        
    }
}

export default TasksPage;


import React, { Component } from 'react';

var tasks_array = ['Task 1: 25 Points', 'Task 2: 12 Points', "Task 3: 95 Points", "Task 4: 11 Points" , "Task 5: 34 Points"];
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

        return(
            <header>
                    <h1 className = {'headerfont'}> Your Upcoming Tasks </h1>
                    {generatebuttons()}
            </header>
        )
    }
}

export default TasksPage;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    }
  }


  async componentWillMount() {
    const base_url = 'http://localhost:3000';

    const endpoint = '/getUserInfo';

    fetch('http://localhost:3000/getUserInfo', {
      method: 'POST',
      body: {
        "email": "morgan@idiot.com",
      }
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.error) {
        console.warn('Error!', response.error);
      } else {
        console.log(response);
        this.setState({userInfo: response});
      }
    })
    .catch((error) => {
      console.warn('Error: ', error);
    });

  }



  render() {
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

               <h2>Top Tasks</h2>

            <ul>
            <div className="main-task">
              <li>Verify project budget</li>
              <h3>Google</h3>
              <p>- due January 28th, 2019</p>
              <p1><Link to="tasks/1">view</Link></p1>
             </div> 
             <div className="main-task"> 
              <li>Finish part 3 of A4</li>
              <h3>UBC 2019 W1 CPSC 343</h3>
              <p>- due January 29th, 2019</p>
              <p1><Link to="tasks/2">view</Link></p1>
              </div>
              <div className="main-task">
              <li>  Install Tivoli Business Systems Manager and appropriate patches on test or QA servers.</li>
              <h3>Microsoft</h3>
              <p>- due February 13th, 2019</p>
              <p1><Link to="tasks/3">view</Link></p1>
              </div>
              <div className="main-task">
              <li>Verify connectivity from production servers to the production LPAR, Tivoli Enterprise Console server, and console machines.</li>
              <h3>Microsoft</h3>
              <p>- due February 15th, 2019</p>
              <p1><Link to="tasks/4">view</Link></p1>
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

export default MainPage;
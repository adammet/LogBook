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
                <li><Link to="/organizations" > Organizations</Link></li>
                <li><Link to="/tasks"> Tasks </Link></li>
                <li><Link to="/settings"> Settings </Link></li>
                <li><Link to="/"> LogOut </Link></li>
              </div>
          </ul>   
        <div className='fade-in'>
            <div className="row">

            <div className="column">
            <div className="org"><h2>Your Organizations</h2></div>
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

               <h2>A Description List</h2>

            <dl>
              <dt>Verify project budget</dt>
              <dd>- due January 28th, 2019</dd>
              <dt>Update project plan</dt>
              <dd>- due January 29t, 2019</dd>
              <dt>  Install Tivoli Business Systems Manager and appropriate patches on test or QA servers.</dt>
              <dd>- due February 13th, 2019</dd>
              <dt>Verify connectivity from production servers to the production LPAR, Tivoli Enterprise Console server, and console machines.</dt>
              <dd>- due February 15th, 2019</dd>
            </dl>
 
              
               

             
             
            </div>
            
              
              

             
             
             
            </div>  
            
          

        
        </div>
        </div>
            
            
     </header>
    )
  }

}

export default MainPage;
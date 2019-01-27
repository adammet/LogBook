import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

	render() {
		
		return(

  <header>
  <div className="background">
  	<div className="login-page">
    <div className="form">
    <div className="title">
    LogBook.
    </div>
      <form className="register-form">
      <input type="text" placeholder="username"/>
      <input type="text" placeholder="password"/>
      <button><Link to="/main" > Login</Link></button>
      <p class="message"> Not Registered?</p>
      </form>
  	<form className="login-form">
    <input type="text" placeholder="username"/>
      <input type="text" placeholder="password"/>
      <input type="text" placeholder="email"/>
      <button><Link to="/main" > Create User</Link></button>
    </form>
   	</div>
    </div>
  </div>

	
 </header>
  
		)
	}
}

export default HomePage;
import React, { Component } from 'react';
import './App.css';
import LoginForm from './Person/person.js';
import Welcome from './Person/userlogin.js';

class App extends Component {
  
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }
  
  // App "actions" (functions that modify state)
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    if(username == null || password == null)
    {
    	this.setState(
    	{
    		user: null
    	})
    }

    else
    {
    	this.setState({
      	user: {
        	username,
        	password,
      	}
    	})
	}
	console.log(username)
	console.log(password)
  //   document.getElementById("para").innerHTML= username
  }
  
  signOut() {
    // clear out user from state
    this.setState({user: null})
  }
  
  handleSignIn(e) {
    e.preventDefault()
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if(username === "")
    {
     	username = null  
     	document.getElementById("para1").innerHTML = "invalid-username re-enter"
    }
    if(password === "")
    {
    	password = null
    	document.getElementById("para2").innerHTML = "invalid-password re-enter"
	}
    this.signIn(username, password)
  }

  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
      	<div className="theapp">
      	<header className = "head">
		<h1>BUSAPP</h1>
		</header>
        <br/>
        <br/>
        { 
          (this.state.user) ? 
            <Welcome 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)}
             click = {this.handleSignIn.bind(this)} 
            />
        }
        <footer className = "foot"/>
      </div>
    )
    
  }
  
}

export default App;

import React from 'react';
import './person.css';

const person =(props) => {
	//get the key frm server and auth
	return(
	<div className = "login">
	
	<form className="loginpage"> 
        <h3 className="heading">Sign in </h3>
        <input type = "email" id="username" placeholder= "username" />
        <br/>
        <label className="para1" id="para1"> </label>
        <br/><br/>
        <input type="password" id="password" placeholder="password" />
        <br/>
        <label className="para1" id="para2"> </label>
        <br/><br/>
        <button className = "loginbutton" onClick={props.click}>Login</button>
    </form>
    </div>
	);
}



export default person;

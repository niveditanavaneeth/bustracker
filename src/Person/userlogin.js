import React from 'react';
import './person.css';

const user = (props) =>
{
	//input bus number
	//get json object
	//parse the json obj
	//display the lat and long
	//get the values frm the server and replace in the place of value attribute
	return (
	<div className="main-div">
      <h2>Welcome User!!! </h2>
      <br/>
      <div className="div1">
      <input type="textbox" id = "busnumber" placeholder ="enter bus number"/>
      <label></label>
      <br/><br/>
      </div>
      <div className="div2">
      <input type = "textbox" id="location" placeholder="current location" readOnly/>
      <br/>
      <br/>
      <label></label>
      </div>
      <div className="div3">
      <input type = "time" id= "extimatearrival" placeholder = "time" readOnly/>
      <br/>
      <br/>
      <label></label>
      </div>
      <button className = "signout" onClick={props.onSignOut}>Sign out</button>
      </div>
	);
}
export default user;
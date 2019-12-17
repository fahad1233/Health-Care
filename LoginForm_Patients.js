import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Patients from '../Patients';

 class LoginForm_Patients extends Component {
  render() {
    return (
      
      <div>

          <form  method="POST" id="login">
          <br />
  <br />
  <h1>LOG IN for Patients</h1>
  <br />
  <br />
  <h2>Fill up the blanks for <em>LOG IN</em></h2>
  <br />
  <br />

  
  <div id="inputs">
    <input type="email" placeholder="E-mail" name="email" required />
    <br />
    <br />
    <input type="password" placeholder="Password" name="password" required />
    <br />
    <br />
  </div>
  <button type="submit">LOG IN</button>
  <span id="login-bottom" />
</form>
      </div>
    )
  }
}
export default LoginForm_Patients ;
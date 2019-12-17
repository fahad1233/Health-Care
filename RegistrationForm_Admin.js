import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class RegistrationForm_Admin extends Component {
  render() {
    return (
      <div>
        <form method="POST" id="login">  <br />
  <br />
  <h1>REGISTRATION</h1> 
  <h2> Fill up the blanks for <em>REGISTRATION</em> </h2>
  <br />
  <br />
  <div id="inputs">
    <input type="text" placeholder="User Name" name="user_name" required />
    <br />
    <br />
    <input type="email" placeholder="E-mail" name="email" required />
    <br />
    <br />
    <input type="password" placeholder="Password" name="password" required />
    <br />
    <br />
  </div>
  <button type="submit" name="register">REGISTRATION </button>
  <span id="login-bottom" />
</form>
      </div>
    )
  }
}
export default RegistrationForm_Admin;
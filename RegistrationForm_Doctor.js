import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';


class RegistrationForm_Doctor extends Component {
     constructor(props){
       super(props);
     }


handleSubmit(event){
             event.prevenDefault();

             fetch('https://localhost:44302/api/account/register' , {
               method : 'POST', 
               headers : {
                 'Accept' : 'application/json',
                 'Content-Type' : 'application/json'
               }
             })
}


  render() {
    return (
      <div>

          <Form onSubmit = {this.handleSubmit}>
        <form method="POST" id="login">
<br />
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
  <br /><br />
    <br /><br />
    <br />
</form>
</Form>
      </div>
    )
  }
}

export default RegistrationForm_Doctor;

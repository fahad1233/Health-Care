import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Postdata} from './service/Postdata';

class LoginForm_Doctor extends Component {

 
constructor(props){
  super(props);

  this.state = {
    email : '' , password : '' , grant_type : 'password' , Redirect : false
  }
  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this);
}

login(){
    if (this.state.email && this.state.password){
      Postdata('login', this.state).then ((result) => {
        let responseJSON = result;
        if(responseJSON.userData){
           sessionStorage.setItem('userData', responseJSON);
           this.setState({Redirect : true});
        }
        else{
          console.log("Login error....");
        }
        });
    }
}

onChange(e){
  this.setState({[e.target.email] : e.target.value});
  console.log(this.state);
}




  render() {


    if(this.state.Redirect){
          return (<Redirect to = {"/doc_dashboard"} />)
    }

    return (
      <div>
          <form  method="POST" id="login">
          <br />
  <br />
  <h1>LOG IN for Doctors</h1>
  <br />
  <br />
  <h2>Fill up the blanks for <em>LOG IN</em></h2>
  <br />
  <br />

  
  <div id="inputs">
    <input type="email" placeholder="E-mail" name="email" onChange = {this.onChange} required />
    <br />
    <br />
    <input type="password" placeholder="Password" name="password" onChange = {this.onChange} required />
    <br />
    <br />
  </div>
  <button type="submit" onClick = {this.login}>LOG IN</button>
  <span id="login-bottom" />
</form>
      </div>
    )
  }
}
export default LoginForm_Doctor;

import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';


 class Login_Admin extends Component {

   constructor(props){
     super(props)

     const token = localStorage.getItem("token")
     let loggedIn = true
     if(token == null){
       loggedIn = false
     }

     this.state = {
       email : '',
       password : '', 
       loggedIn
     }
     this.onChange = this.onChange.bind(this)
     this.submitForm = this.submitForm.bind(this)
   }


onChange(e){
    this.setState({
      [e.target.email] : e.target.value
    })
}

submitForm (e) {
       e.preventDefault()
       const { email , password } = this.state

    if (email === "admin420@gmail.com" && password === "Admin123"){
      localStorage.setItem ("token" , "iamadmin123")
      this.setState({
        loggedIn : true
      })
    }

}


  render() {

   if(this.state.loggedIn){
     return <Redirect to = "/admin_dashboard" />
   }

    return (
      <div>
        <form  method="POST" id="login"  onSubmit = {this.submitForm}>  <br />
  <br />
  <h1>LOG IN for Admin</h1>
  <br />
  <br />
  <h2>Fill up the blanks for <em>LOG IN</em></h2>
  <br />
  <br />

  
  <div id="inputs">
    <input type="email" placeholder="E-mail" name="email" value = {this.state.email} onChange = {this.onChange} required />
    <br />
    <br />
    <input type="password" placeholder="Password" name="password" value = {this.state.password} onChange = {this.onChange} required />
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


export default Login_Admin;
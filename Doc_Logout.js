import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';

export default class Doc_Logout extends Component {

constructor(props){
    super(props)
    localStorage.removeItem("token")
}
    render() {
        return (
            <div>
                       <br /><br /> <br /><br />       <br /><br /> <br /><br />       <br /><br /> <br /><br />
                <h1>Thank You... To Log In click here...</h1>
                <br /><br /> 
                
                <Link to="/login"> <h1><b>Admin Panel</b></h1> </Link>

            <br /><br />
            </div>
        )
    }
}

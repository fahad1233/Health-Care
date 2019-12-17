import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import Drug from './Drug';
import Brand from './Brand';



export default class Admin_Dashboard extends Component {

  constructor(props){
    super(props)
    const token = localStorage.getItem("token")


    let loggedIn = true
    if(token == null){
      loggedIn = false
    }

    this.state = {
      loggedIn
    }

  }


  render() {

    if(this.state.loggedIn === false){
      return <Redirect to = "/login" />
    }

    return (
    
      <div>
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/"> <h1><b> HEALTH CARE </b></h1> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse main-menu-item justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/admin_dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="Doctor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Medicine Information
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="nav-link" to="/generic">Generic Information</Link>
                      <Link className="nav-link" to="/drug">Drug Information</Link>
                      <Link className="nav-link" to="/brand">Brand Information</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      </div>
    )
  }
}
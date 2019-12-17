
import React from 'react'
import { Link } from 'react-router-dom';

function DocDashboard(){
    return(
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
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="Doctor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Doctor Information
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="nav-link" to="/doc_per">Personal Information</Link>
                <Link className="nav-link" to="/doc_edu">Educational Information</Link>
                <Link className="nav-link" to="/doc_spe">Specialist</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
               
               
              <Link className="nav-link dropdown-toggle" to="Doctor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Patients Information
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="nav-link" to="/patients">Patients</Link>
                <Link className="nav-link" to="/prescription">Prescription</Link>
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

    );
}


export default DocDashboard;
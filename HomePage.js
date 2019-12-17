import React from 'react'
import { Link } from 'react-router-dom';


function HomePage() {
  return (
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
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">about</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/bmi">BMI Calculator</Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="Doctor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Doctors
                      </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/doc_registration">Registration</Link>
                      <Link className="dropdown-item" to="/doc_login">Log IN</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="patients" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Patients
                      </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/pati_registration">Registration</Link>
                      <Link className="dropdown-item" to="/pati_login">Log IN</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
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


export default HomePage;

import React from 'react';
import { BrowserRouter, Route, Switch , Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage'
import About from './components/About'
import ContactPageContent from './components/ContactPageContent'

import RegistrationForm_Doctor from './components/RegistrationForm_Doctor';
import LoginForm_Doctor from './components/LoginForm_Doctor';
import RegistrationForm_Patients from './components/RegistrationForm_Patients';
import LoginForm_Patients from './components/LoginForm_Patients';
import Login_Admin from './components/Login_Admin';
import Doc_Logout from './components/Doc_Logout';
import RegistrationForm_Admin from './components/RegistrationForm_Admin';


import Landing from './components/Landing/Landing';
import Prescription from './Prescription';
import BMI from './components/BMI';

import Doc_Edu from './Doc_Edu';
import Doc_personal from './Doc_personal';
import Doc_Speciality from './Doc_Speciality';

import DocDashboard from './DocDashboard';
import Admin_Dashboard from './components/Admin_Dashboard';

import Patients from './Patients';

import Generic from './components/Generic';
import Drug from './components/Drug';
import Brand from './components/Brand';
import DozeName from './components/DozeName';


function App() {
  return (
    <BrowserRouter>

      <HomePage />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={ContactPageContent} />


        <Route exact path="/doc_registration" component={RegistrationForm_Doctor} />
        <Route exact path="/doc_login" component={LoginForm_Doctor} />
        <Route exact path="/login" component={Login_Admin} />
        <Route exact path="/pati_registration" component={RegistrationForm_Patients} />
        <Route exact path="/registration" component={RegistrationForm_Admin} />
        <Route exact path="/pati_login" component={LoginForm_Patients} />


        <Route exact path="/prescription" component={Prescription} />

        
        <Route exact path="/bmi" component={BMI} />


        <Route exact path="/doc_edu" component={Doc_Edu} />
        <Route exact path="/doc_per" component={Doc_personal} />
        <Route exact path="/doc_spe" component={Doc_Speciality} />
        <Route exact path="/doc_dashboard" component={DocDashboard} />
        
        <Route exact path="/patients" component={Patients} />


        <Route exact path = "/admin_dashboard" component = {Admin_Dashboard} />
        <Route exact path = "/generic" component = {Generic} />
        <Route exact path = "/drug" component = {Drug} />
        <Route exact path = "/brand" component = {Brand} />
        <Route exact path = "/doze" component = {DozeName} />
        
        <Route exact path = "/logout" component = {Doc_Logout} />

      </Switch>

    </BrowserRouter>

  );
}

export default App;

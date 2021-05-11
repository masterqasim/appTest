import logo from './logo.svg';
import React, { Component , Fragment } from 'react'
import './App.css';
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Header from './components/Header'
import Dashboard from './screens/Dashboard'


function App() {
  return (
    <Router>
      <Fragment>
          <Header/>
          <Route exact path="/" component={SignUp}></Route> 
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/Dashboard" component={Dashboard}/>

      </Fragment>
    </Router>
  );
}

export default App;

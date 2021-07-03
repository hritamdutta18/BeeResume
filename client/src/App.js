import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import logo from './beelogo.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className="col-lg-8 mx-auto text-center mt-4 head">
          <h1><img src={logo} alt="Bee Logo"/><b>Resume</b></h1>
          <p className="lead">Get going by building an exciting resume !</p>
          <hr />
        </div>  
        <UserForm/>
      </div>  
    );
  }
}

export default App;

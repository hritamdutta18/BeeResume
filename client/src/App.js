import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <div>
        <div className="col-lg-8 mx-auto text-center mt-5">
          <img srcSet="beelogo.jpg" alt="Bee Logo"></img><h1><b>Resume!</b></h1>
          <p className="lead">Please provide clear and accurate information.</p>
          <hr />
        </div>  
        <UserForm/>
      </div>  
    );
  }
}

export default App;

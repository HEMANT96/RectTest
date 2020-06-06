import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main.js';
import './App.css';

class App extends Component{
  render(){
    return (
     <div className="App">
        <Main/>    
     </div>
   );
  }
}

export default App;

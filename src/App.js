import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
//Paginas
import Admin from './pages/Admin/';
import Signin from './pages/Signin';
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <h1>Estamos en APP.js</h1>
          <Admin></Admin>
          <Signin></Signin>
          <Home></Home>
          <Contact></Contact>
    </div>
    
  );
}


export default App;

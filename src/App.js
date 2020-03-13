import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
//Paginas
import Admin from './pages/Admin/';
import Signin from './pages/Admin/Signin';
import Home from "./pages/Home";
import Contact from "./pages/Contact";

//Layouts

//Rutas
import routes from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index)=>(
          <RouterWithSubRoutes key={index} {...route} />
          ))}
          
        
      </Switch>
    </BrowserRouter>
  );
}

function RouterWithSubRoutes(route){
  
  return (
    <Route 
    path={route.path}
    exact={route.exact}
    // como el layout tiene que renderizar mas componentes se le pasa las rutas hijas
    render={props=><route.component routes={route.routes} {...props}/> }
    />
  );
}
export default App;

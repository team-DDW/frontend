import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Landingpage from "./Components/Landingpage"
import SideNav from "./Components/SideNav"
import Portfolio from "./Components/Portfolio"

// import SideNav from './side-nav/SideNav'
function App() {
  return (
    <Router>
    
     <SideNav/>
     
     <Route exact path="/" exact component={Landingpage}/>
     <Route exact path="/Portfolio" exact component={Portfolio}/>
    </Router>
  );
}

export default App;

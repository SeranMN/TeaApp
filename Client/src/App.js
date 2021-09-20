import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import Navbar from './component/Navbarnavod';
import Dashboard from './component/Pages/Dashboard';
import Addstock from './component/Pages/Addstock';
import In from './component/Pages/In';
import Out from './component/Pages/Out';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
    <Router>
      
      <switch>
      <Route exact path = "/">
        <Home/>
      </Route>

        <Route path='/Dashboard' exact component={Dashboard}/>
        <Route path='/Addstock' exact component={Addstock}/>
        <Route path='/In' exact component={In}/>
        <Route path='/Out' exact component={Out}/>
        

        

      </switch>
    </Router>
 
   </>
   );
}

export default App;

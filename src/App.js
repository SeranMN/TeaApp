import React from 'react';
import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainContent2 from './component/MainContent2';
import Footer from './component/Footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidenavbar from "./component/Sidenavbar"
import { Row,Col } from 'react-bootstrap'
import ProductStock from './component/ProductStock';
import Reportpage from './component/Reportpage';



function App() {
  return (
     <Router>
    <div className="App">
      {/* <Header/>
      <MainContent/>
     <ProductStock/>
      <Footer/>  */}
     
     <Sidenavbar />
       
       <div >   
        <Switch>
          <Route exact path = "/">
            <MainContent2/>
          </Route>
          <Route path = "/MainContent2.js">
            <MainContent2/>
          </Route>
          <Route path = "/ProductStock.js">
            <ProductStock/>
          </Route>
           <Route path = "/Reportpage.js">
             <Reportpage/>
           </Route>
          
      </Switch>
     
    </div>
     
     </div>
     </Router>  

  );
}

export default App;

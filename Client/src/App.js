import React from 'react';
//import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './component/CusProductView';
import MainContent2 from './component/AdmnProductView';
//import Footer from './component/Footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidenavbar from "./component/ProductSidenavbar"
import { Row,Col } from 'react-bootstrap'
import ProductStock from './component/ProductStock';
import Reportpage from './component/proReportpage';



function App() {
  return (
     
     
     
     <Router>
    <div className="App">
      
      {/* <MainContent/> */}
     
      
     
     <Sidenavbar />
       
       <div >   
        <Switch>
          <Route exact path = "/">
            <MainContent2/>
          </Route>
          {/* <Route path = "/CusProductView.js">
            <MainContent/>
          </Route> */}
          <Route path = "/ProductStock.js">
            <ProductStock/>
          </Route>
           <Route path = "/proReportpage.js">
             <Reportpage/>
           </Route>
          
      </Switch>
     
    </div>
     
     </div>
     </Router>  

  );
}

export default App;

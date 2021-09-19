import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './component/Home/Home';
import { UserProvider } from "./component/UserContext/UserContext"
import Delete from './component/Delete/Delete';
import Read from './component/Read/Read';
import Create from './component/Create/Create';
import Create2 from './component/Create/Create2';
import Navbar2 from './component/Navbar2';
import Edit from './component/Edit/Edit';
import Home2 from './component/Home/Home2';
import Navbar from './component/Navbar';
//import Delivery from './component/Create/Delivery';
//import Edit1 from './component/Edit/Edit1';
//import Edit from './component/Edit/Edit';


function App() {
  return (
    <div>
      <Header />
  
      <br/>
      <div className="app">
        <br />
        <Navbar />
        <br/>
        <div className="container">
          <UserProvider>
            <Router>
              <Switch>

                <Route path="/create/"> <Create /> </Route>
                <Route path="/create2/"> <Create2 /> </Route>

                <Route path="/read/:id"> <Read /> </Route>

                <Route path="/edit/:id"> <Edit/> </Route>

                <Route path="/delete/:id"> <Delete /> </Route>

                <Route path="/home1"> <Home /> </Route>
                <Route path="/home2"> <Home2 /> </Route>
                
                 <Route path="/navb"><Navbar2/></Route> 

                <Route path="/home2/"><Home2 /></Route>

                {/* <Route path="/deli/"><Delivery/></Route> */}



              </Switch>
            </Router>
          </UserProvider>
        </div>



      </div>

      <Footer />
    </div>

  );
}

export default App;


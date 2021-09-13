import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import React from 'react';
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './component/Home/Home';
import { UserProvider} from "./component/UserContext/UserContext"
import Delete from './component/Delete/Delete';
import Read from './component/Read/Read';
import Create from './component/Create/Create';

function App() {
  return (

    <div className="app">

      

      <Header />
      <h1>Gangasiri </h1>
      <div className="container">
      <UserProvider>
      <Router>
        <Switch>

        <Route path="/create/">
            <Create />
          </Route>

        <Route path="/read/:id">
            <Read />
          </Route>

        <Route path="/delete/:id">
            <Delete />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserProvider>
      </div>
      
      <Footer />

    </div>

  );
}

export default App;


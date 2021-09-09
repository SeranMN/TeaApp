import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Employee from './component/Employee';
import AdminDashBoard from './component/AdminDashBoard';
import EmpMngDash from './component/EmpMngDash';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidenavbar from "./component/Sidenavbar"
import { Row,Col } from 'react-bootstrap';
import Salary from './component/Salary';
import Attendance from './component/Attendance';
import FormerEmp from './component/FormerEmp';
function App() {
  return (
    <Router>
      <div className="App">
        <Sidenavbar />
       
       <div >   
        <Switch>
          <Route exact path = "/">
            <Employee/>
          </Route>
          <Route path = "/Employee.js">
            <Employee/>
          </Route>
          <Route path = "/Salary.js">
            <Salary/>
          </Route>
          <Route path = "/Attendance.js">
            <Attendance/>
          </Route>
          <Route path = "/FormerEmp.js">
            <FormerEmp/>
          
          </Route>
      </Switch>
     {/* <Footer/> */}
    </div>
      </div>
      </Router>
  );
}

export default App;

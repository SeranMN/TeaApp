
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Employee from './component/Employee';
import Home from './component/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidenavbar from "./component/Sidenavbar"
import AdminDashBoard from "./component/AdminDashBoard"
import Salary from './component/Salary';
import Attendance from './component/Attendance';
import FormerEmp from './component/FormerEmp';
import AttendanceMark from './component/AttendanceMark';
function App() {
  return (
    <Router>
      <div className="App">
    
       
         
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/Admin.js">
            <AdminDashBoard/>
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
           <Route path = "/AttendanceMark.js">
            <AttendanceMark/>
          
          </Route>
      </Switch>
     {/* <Footer/> */}
    </div>
     
      </Router>
  );
}

export default App;

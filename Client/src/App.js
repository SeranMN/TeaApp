import Header from "./component/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Supplier from "./component/Supplier";
import DailySupply from "./component/DailySupply";
import RegEmpSupBtn from "./component/RegEmpSup_Btn";
import SupplierProfile from "./component/SupplierProfile";
import ReportTable from "./component/Report_Table";
import FormerSuppliers from "./component/FormerSuppliers";
import Employee from "./component/Employee";
import Home from "./component/Home";
import AdminDashBoard from "./component/AdminDashBoard";
import Salary from "./component/Salary";
import Attendance from "./component/Attendance";
import FormerEmp from "./component/FormerEmp";
import AttendanceMark from "./component/AttendanceMark";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/Supplier.js">
              <Supplier />
            </Route>

            <Route path="/Report_Table.js">
              <ReportTable />
            </Route>

            <Route path="/Report_Table.js">
              <ReportTable />
            </Route>

            <Route path="/FormerSuppliers.js">
              <FormerSuppliers />
            </Route>

            <Route exact path="/Admin.js">
              <AdminDashBoard />
            </Route>

            <Route path="/Employee.js">
              <Employee />
            </Route>

            <Route path="/Salary.js">
              <Salary />
            </Route>

            <Route path="/Attendance.js">
              <Attendance />
            </Route>

            <Route path="/FormerEmp.js">
              <FormerEmp />
            </Route>

            <Route path="/AttendanceMark.js">
              <AttendanceMark />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

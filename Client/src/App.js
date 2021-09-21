import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Supplier from "./component/Supplier";
import DailySupply from "./component/DailySupply";
import ReportTable from "./component/Report_Table";
import FormerSuppliers from "./component/FormerSuppliers";
import Employee from "./component/Employee";
import AdminDashBoard from "./component/AdminDashBoard";
import Salary from "./component/Salary";
import Attendance from "./component/Attendance";
import FormerEmp from "./component/FormerEmp";
import AttendanceMark from "./component/AttendanceMark";
import Dashboard from "./component/Pages/Dashboard";
import Addstock from "./component/Pages/Addstock";
import In from "./component/Pages/In";
import Out from "./component/Pages/Out";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import CusTable from "./component/CusTable";
import CusLogin from "./component/CusLogin";
import CusProfile from "./component/CusProfile";
import FeedbackAdmin from "./component/FeedbackAdmin";
import ContactUs from "./component/ContactUs";
import ApprTable from "./component/ApprTable";
import PendingTable from "./component/AppPendingTable";
import ContactUsView from "./component/ContactUsView";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/Addstock" exact component={Addstock} />
            <Route path="/In" exact component={In} />
            <Route path="/Out" exact component={Out} />

            <Route exact path="/Supplier.js">
              <Supplier />
            </Route>

            <Route path="/Report_Table.js">
              <ReportTable />
            </Route>

            <Route path="/FormerSuppliers.js">
              <FormerSuppliers />
            </Route>

            <Route path="/DailySupply.js">
              <DailySupply />
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

            <Route exact path="/CusLogin.js">
              <CusLogin />
            </Route>

            <Route path="/FeedbackAdmin.js">
              <FeedbackAdmin />
            </Route>

            <Route path="/CusTable.js">
              <CusTable />
            </Route>

            <Route path="/CusProfile.js">
              <CusProfile />
            </Route>

            <Route exact path="/ContactUs.js">
              <ContactUs />
            </Route>

            <Route exact path="/PendingTable.js">
              <PendingTable />
            </Route>

            <Route path="/ApprTable.js">
              <ApprTable />
            </Route>

            <Route path="/ContactUsView.js">
              <ContactUsView />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

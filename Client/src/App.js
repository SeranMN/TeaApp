import React from "react";
import Header from "./component/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Supplier from "./component/Supplier";
import DailySupply from "./component/DailySupply";
import ReportTable from "./component/Sup_Report_Table";
import FormerSuppliers from "./component/FormerSuppliers";
import Employee from './component/Employee';
import AdminDashBoard from "./component/AdminDashBoard"
import Salary from './component/Salary';
import Attendance from './component/Attendance';
import FormerEmp from './component/FormerEmp';
import AttendanceMark from './component/AttendanceMark';
import Dashboard from './component/Pages/Dashboard';
import Addstock from './component/Pages/Addstock';
import In from './component/Pages/In';
import Out from './component/Pages/Out';
import ReportNavod from './component/Pages/ReportNavod'
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import CusTable from './component/CusTable';
import CusLogin from './component/CusLogin'
import CusProfile from './component/CusProfile';
import FeedbackAdmin from './component/FeedbackAdmin';
import ContactUs from './component/ContactUs';
import ApprTable from './component/ApprTable';
import PendingTable from './component/AppPendingTable';
import ContactUsView from './component/ContactUsView';
import ProductStock from './component/ProductStock';
import Reportpage from './component/proReportpage';
import MainContent2 from './component/AdmnProductView';
import MainContent from './component/CusProductView';
import ProductPurchase from './component/ProductPurchase'; 
import OrderDetails from './component/OrderDetails'; 
import OrderAdmin from './component/OrderAdmin';
import OrderReport from './component/OrderReport';


import EmpProf from "./component/EmpProf";


function App() {
  return (
     
     
     
      

    <div> 
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/Addstock" exact component={Addstock} />
            <Route path="/In" exact component={In} />
            <Route path="/Out" exact component={Out} />
            <Route exact path="/Supplier.js">
              <Supplier />
            </Route>
            
        <Route path='/ReportNavod' exact component={ReportNavod}/>
              

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

          <Route exact path = "/CusLogin.js">
            <CusLogin />
          </Route>
          <Route path = "/FeedbackAdmin.js">
            <FeedbackAdmin />
          </Route>
          <Route path = "/CusTable.js">
            <CusTable />
          </Route>
          <Route path = "/CusProfile.js">
            <CusProfile />
          </Route>
          <Route exact path = "/ContactUs.js">
      <ContactUs/>
    </Route>
    <Route exact path = "/PendingTable.js">
      <PendingTable/>
    </Route>
    <Route path = "/ApprTable.js">
      <ApprTable/>
    </Route>
    <Route path = "/ContactUsView.js">
      <ContactUsView/>
    </Route>
    {/* <Route  path = "/AdmnProductView.js">
            <MainContent2/>
          </Route> */}
          <Route path="/AdmnProductView.js">
            <MainContent2/> </Route>
          <Route path = "/CusProductView.js">
            <MainContent/>
          </Route>
          <Route path = "/ProductStock.js">
            <ProductStock/>
          </Route>
           <Route path = "/proReportpage.js">
             <Reportpage/>
            </Route>
            <Route path = "/empProf.js">
             <EmpProf/>
           </Route>
           <Route  path='/ProductPurchase' exact component={ProductPurchase}/>
           <Route path='/OrderDetails' exact component={OrderDetails}/>
          <Route path='/OrderAdmin' exact component={OrderAdmin}/>
          <Route path='/OrderReport' exact component={OrderReport}/>
      </Switch>
    </div>
     
      </Router >
        </div>
      
    
  );
}

export default App;

import Header from "./component/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./component/Footer";
import Supplier from "./component/Supplier";
import DailySupply from "./component/DailySupply";
import RegEmpSupBtn from "./component/RegEmpSup_Btn";
import SupplierProfile from "./component/SupplierProfile";
import ReportTable from "./component/Report_Table";
import FormerSuppliers from "./component/FormerSuppliers";
import SideNavBar from "./component/SideNavBar";
import SuppliersTable from "./component/Supplier_Table";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <SideNavBar />
          <div>
            <Switch>
              <Route exact path="/">
                <Supplier/>
              </Route>

              <Route path="/Report_Table.js">
                <ReportTable />
              </Route>

              <Route path="/Report_Table.js">
                <ReportTable/>
              </Route>

              <Route path="/FormerSuppliers.js">
                <FormerSuppliers />
              </Route>
            </Switch>
            {/* <Footer/> */}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

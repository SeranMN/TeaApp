
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import CusTable from './component/CusTable';
import CusLogin from './component/CusLogin'
import CusProfile from './component/CusProfile';
import FeedbackAdmin from './component/FeedbackAdmin';
import CustReg from './component/CustReg';


function App() {
  return (
    <div className="App">
     
     
     <Router>
         
       <div >   
        <Switch>
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
          
        </Switch>
      </div>
    </Router>

    
     
    </div>
  );
}

export default App;

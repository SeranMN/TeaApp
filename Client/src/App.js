import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './component/ContactUs';
import ApprTable from './component/ApprTable';
import AppFormView from './component/AppFormView';
import ViewBtn from './component/AppViewBtn';
import ContactUsView from './component/ContactUsView';
import PendingTable from './component/AppPendingTable';
import ApprManager from './component/ApprManager';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidenavbar from './component/AppSidenavbar'
import AppForm from './component/AppForm';

function App() {
  return (
    //<ContactUs/>

  
    <Router>

<div className="App">
   
 {/* <div >   
   
  <Switch>
    <Route exact path = "/">
      <ContactUs/>
    </Route>
    <Route path = "/">
      <ContactUs/>
    </Route>
  </Switch>
</div> */}

{/* <Sidenavbar /> */}
 
 <div >   
  <Switch>
    <Route exact path = "/">
      <PendingTable/>
    </Route>
    <Route path = "/ApprTable.js">
      <ApprTable/>
    </Route>
  </Switch>
</div>

</div>
  </Router> )
}
{/*<ViewBtn/>*/}
{/*<ApprManager><ContactUs/><PendingTable/><ApprTable/><PendingTable/>*/}
export default App;
       
   
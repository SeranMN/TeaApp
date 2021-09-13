import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import ApprTable from './component/ApprTable';
import AppFormView from './component/AppFormView';
import ViewBtn from './component/ViewBtn';
import ContactUsView from './component/ContactUsView';
import PendingTable from './component/PendingTable';
import ApprManager from './component/ApprManager';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidenavbar from './component/Sidenavbar'

function App() {
  return (
    <Router>
<div className="App">
  <Sidenavbar />
 
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
</Router>
);
}
{/*<ViewBtn/>*/}
{/*<ApprManager><ContactUs/><PendingTable/><ApprTable/><PendingTable/>*/}
export default App;
       
   
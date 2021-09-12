import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from './component/Footer';
import CusTable from './component/CusTable';
import CusLogin from './CusLogin';
import CusProfile from './CusProfile';
import FeedbackAdmin from './component/FeedbackAdmin';
import Sidenavbar from "./component/Sidenavbar"

function App() {
  return (
    <div className="App">
    {/* <Header/>
     <h1>Gangasiri Tea Factory</h1> */ }
    { /*  <CusProfile /> */ }
     <Router>
        <Sidenavbar /> 
       <div >   
        <Switch>
          <Route exact path = "/">
            
          </Route>
          <Route path = "/FeedbackAdmin.js">
            <FeedbackAdmin />
          </Route>
          <Route path = "/CusTable.js">
            <CusTable />
          </Route>
          <Route path = "/.js">
            
          </Route>
        </Switch>
      </div>
    </Router> 
    { /* <Footer/> */ }
     
    </div>
  );
}

export default App;

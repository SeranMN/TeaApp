import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPurchase from './component/ProductPurchase'; 
import OrderDetails from './component/OrderDetails'; 
import OrderAdmin from './component/OrderAdmin';

function App() {
  return (
    <div className="App">
     
     
     <Router>

      <switch>
        
        <Route  path='/ProductPurchase' exact component={ProductPurchase}/>
        <Route path='/OrderDetails' exact component={OrderDetails}/>
        <Route path='/OrderAdmin' exact component={OrderAdmin}/>
        {/* <Route path='/In' exact component={In}/>
        <Route path='/Out' exact component={Out}/> */}

      </switch>

    </Router>
     
     
     
    </div>
  );
}

export default App;

import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import ProductPurchase from './component/ProductPurchase';
import OrderDetails from './component/OrderDetails';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <ProductPurchase/>
     <OrderDetails/>
  
     <Footer/>
     
    </div>
  );
}

export default App;

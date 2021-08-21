import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import SuppliersTable from './component/Supplier_Table';
function App() {
  return (
    <div className="App">
     <Header/>
     <SuppliersTable/>
     <Footer/>
     
    </div>
  );
}

export default App;

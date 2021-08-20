import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import EmployeeTable from './component/EmployeeTable';
function App() {
  return (
    <div className="App">
     <Header/>
     <EmployeeTable/>
     <Footer/>
     
    </div>
  );
}

export default App;

import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Supplier from './component/Supplier';
import DailySupply from './component/DailySupply';
import RegEmpSupBtn from './component/RegEmpSup_Btn';

function App() {
  return (
    <div className="App">
      <Header />
      <Supplier/>
      {/* <DailySupply/>
      <RegEmpSupBtn/> */}
     <Footer/>
     
    </div>
  );
}

export default App;

import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import ApprTable from './component/ApprTable';
import AppFormView from './component/AppFormView';
import ViewBtn from './component/ViewBtn';
import ContactUsView from './component/ContactUsView';

function App() {
  return (
    
    <div className="App">
     <Header/>
     {/*<ViewBtn/>*/}
     <ContactUsView/>
     {/*<ApprTable/>*/}
     <Footer/>     
    </div>
    
  );
}

export default App;

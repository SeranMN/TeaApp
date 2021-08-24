import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import CusTable from './component/CusTable';
import CusLogin from './CusLogin';
import CusProfile from './CusProfile';
import Feedbackform from './component/Feedbackform';
import FeedbackAdmin from './component/FeedbackAdmin';
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
     <Header/>
     <h1>Gangasiri Tea Factory</h1>
     <CusProfile />
     <Footer/>
     
    </div>
  );
}

export default App;

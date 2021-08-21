import Header from './component/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Employee from './component/Employee';
function App() {
  return (
    <div className="App">
     <Header/>
     <Employee/>
     <Footer/>
     
    </div>
  );
}

export default App;

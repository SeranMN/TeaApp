import React from 'react'
import Formbtn from './Formbtn'
import { useState } from 'react';
import BtnModal from './BtnModal';
import ContactUsView from './ContactUsView';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'



const ContactUs = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Router>
    <div>
    <Route path='/' exact render={(props) =>(
       <>
         <Formbtn onClick={() => setModalShow(true)} />
         <BtnModal show = {modalShow} onHide = {() => setModalShow(false)} />
         <Link to="/ContactUsView">View</Link>   

       </>
     )}/>
    <Route path="/ContactUsView" component={ContactUsView} />      
    </div>
    </Router>
    
  )
}

export default ContactUs

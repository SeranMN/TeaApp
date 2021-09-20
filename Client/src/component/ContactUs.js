import React from 'react'
import Formbtn from './AppFormbtn'
import { useState } from 'react';
import BtnModal from './AppBtnModal';
import ContactUsView from './ContactUsView';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'


const ContactUs = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Router>
    <div>
    <Route path='/' exact render={(props) =>(
       <>
         <Formbtn onClick={() => setModalShow(true)} />
         <BtnModal show = {modalShow} onHide = {() => setModalShow(false)} />
         <Link to="/ContactUsView">
          <Button variant="success">View</Button>
         </Link>   

       </>
     )}/>
    <Route path="/ContactUsView" component={ContactUsView} />      
    </div>
    </Router>
    
  )
}

export default ContactUs

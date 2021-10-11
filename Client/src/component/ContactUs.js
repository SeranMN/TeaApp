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
  
    <div>

         <Formbtn onClick={() => setModalShow(true)} />
         <BtnModal show = {modalShow} onHide = {() => setModalShow(false)} />
         <Link to="/ContactUsView.js">
          <Button variant="success">View</Button>
         </Link>     
    </div>
  )}

export default ContactUs
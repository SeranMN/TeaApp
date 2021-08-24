import React from 'react'
import Viewbtn from './ViewBtn'
import { useState } from 'react';
import ViewModal from './ViewModal';


const ContactUsView = () => {
    const [modalShow, setModalShow] = useState(false);
    
  return (
    <div>
    <Viewbtn onClick={() => setModalShow(true)} />
      <ViewModal show = {modalShow} onHide = {() => setModalShow(false)} />
    </div>
  )
}

export default ContactUsView

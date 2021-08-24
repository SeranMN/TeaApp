import React from 'react'
import Formbtn from './Formbtn'
import { useState } from 'react';
import BtnModal from './BtnModal';
import ViewBtn from './ViewBtn';


const ContactUs = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      
      <Formbtn onClick={() => setModalShow(true)} />
      <BtnModal show = {modalShow} onHide = {() => setModalShow(false)} />
      {/*<ViewBtn/>*/}
        
      
    </div>
    
  )
}

export default ContactUs

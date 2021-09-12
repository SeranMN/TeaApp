import React from 'react'
import button from 'react-bootstrap/Button'

const Button = ({onclick}) => {
    return (
        <>
    <Button variant="primary" onclick={onclick}>add</Button>
            
        </>
    )
}

export default Button


// import React from 'react'
// import Formbtn from './Formbtn'
// import { useState } from 'react';
// import BtnModal from './BtnModal';

// const ContactUs = () => {
//   const [modalShow, setModalShow] = useState(false);
//   return (
//     <div>
//       <Formbtn onClick={() => setModalShow(true)} />
//       <BtnModal show = {modalShow} onHide = {() => setModalShow(false)} />
//     </div>
//   )
// }

// export default ContactUs
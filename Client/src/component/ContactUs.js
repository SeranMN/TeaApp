import React from 'react'
import Formbtn from './AppFormbtn'
import { useState } from 'react';
import BtnModal from './AppBtnModal';
import ContactUsView from './ContactUsView';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Header from './Header';
import Footer from './Footer';
import {  MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import {  ImLocation } from "react-icons/im";
import './ContactUs.css';
import swal from 'sweetalert';
import Swal from 'sweetalert2';



const ContactUs = () => {
  const [modalShow, setModalShow] = useState(false);

  const ealert = () => {
    swal("E-mail", "gangasiritea@gmail.com");
  }

  const phonealert = () => {
    swal("Telephone number", "0412222222");
  }

  return (
  
    <div>
      <Header/>
    
    <section className='conctus'>

    <div className='conctus-overlay'>

    <h2>Here, Get in Touch with Us...,</h2>

    <CardGroup style={{ marginLeft: "200px",marginRight: "200px",marginTop: "5px"}}>
    <Card text="success" style={{width:"500px", height:"230px",backgroundColor:"rgba(0, 0, 0, 0.4)", border:"solid", display: "flex", flexDirection: "column"}}>
    <Card.Body>
      <Card.Title style={{color: "white"}}>Email</Card.Title>
      <Card.Text>
        <br />
        <MdEmail size={100} color={"#4267B2"} cursor={"pointer"} onClick={ealert}/>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card text="success" style={{width:"500px", height:"230px",backgroundColor:"rgba(0, 0, 0, 0.4)", border:"solid", display: "flex", flexDirection: "column"}}>
    <Card.Body>
      <Card.Title style={{color: "white"}}>Phone</Card.Title>
      <Card.Text>
      <br />
      <AiFillPhone size={100} color={"green"} cursor={"pointer"} onClick={phonealert}/>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card text="success" style={{width:"500px", height:"230px",backgroundColor:"rgba(0, 0, 0, 0.4)", border:"solid", display: "flex", flexDirection: "column"}}>
    <Card.Body>
      <Card.Title style={{color: "white"}}>Meet Us</Card.Title>
      <Card.Text>
        <br />
      <ImLocation size={100} color={"#FF0000"}/>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Formbtn onClick={() => setModalShow(true)} />
         <BtnModal show = {modalShow} onHide = {() => setModalShow(false)} />
         <Link to="/ContactUsView.js">
          <Button variant="success">View</Button>
         </Link>
    </Card.Footer>
  </Card>
</CardGroup>     
    </div>
    </section>
    <Footer/>
    </div>
  )}

export default ContactUs

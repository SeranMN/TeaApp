import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ModalBody } from "react-bootstrap";
import axios from "axios";
const AttendanceModal = (props) => {
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString();
 
  const mark = () => {
   
    const arived = {
      nic: props.employee.nic,
      date: date,
      arrivedTime: time,
      month: new Date().getMonth(),
      year:new Date().getFullYear()
      
    };
    console.log(arived.month)
    
    if (props.type == null) {

      if (props.Attendance === null) {
      
      
        axios.post("http://localhost:5000/attendance/arived", arived).then(
          alert("You have arived at " + time)
        ).catch((err) => {
          alert(err)
      
        })
        

      } else {
     
        axios.put(`http://localhost:5000/attendance/leave/${props.Attendance._id}`, { leavedTime: time }).then(
          alert("You have leaved at " + time)
        ).catch((err) => alert(err));

      }
    }
    
    }
 

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.employee == null ? "Update Data" : "Add Employee"}
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          {console.log(props.type)}
          
          <h1>Name: {props.employee.name} </h1>
          
          <h2>Time :{time}</h2>
          <h2>Date: {date}</h2>
          {/* </>) : (<h1>
              Already leaved
          </h1>)} */}
        </ModalBody>
       {console.log("modal "+props.Attendance)}

        <Modal.Footer>
          
            {props.Attendance === null ? (
              
                <Button variant="success" onClick={mark}>
                  Check In
                </Button>) : (<Button variant="danger" onClick={mark}>
                  Check Out
                </Button>)
            }
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AttendanceModal;

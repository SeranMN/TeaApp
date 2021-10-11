import React from "react";
import Clock from "./Clock";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import { FormControl } from "react-bootstrap";
import AttendanceModal from "./AttendanceModal";
import axios from "axios";

const AttendanceMark = () => {
  const [modalShow, setmodalShow] = useState(false);
  const [search, setSearch] = useState();
  const [emp, SetEmp] = useState([]);
  const date = new Date().toLocaleDateString();
  const [atendDetails, setAtendDetails] = useState();
  const [Attendance, setAttendance] = useState();
  const [type, setType] = useState()
 
  const find = () => {
     setmodalShow(true);
    axios
      .get(`http://localhost:5000/employee/id/${search}`)
      .then((res) => {
        if (res.data) {
          console.log("emp " + res.data);
          SetEmp(res.data);
          axios
            .get(`http://localhost:5000/attendance/${search}`)
            .then((res) => {
                if (res.data) {
                  
                setAtendDetails(res.data);
                console.log("att " + res.data.date);
                if (atendDetails != null) {
                  console.log(atendDetails);
                    atendDetails.map((today) => {
                      
                        if (today.date == date) {
                            if (!today.leavedTime) {
                                setAttendance(today);
                              console.log("today" + today.date);
                              
                            } else {
                              setType("leave")
                              
                            }
                        }
                  });
                }
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        alert(err.msg);
      });
    
  };

  return (
    <div style={{ marginLeft: "220px", marginTop: "20px" }}>
      <Clock />

      {/* {useEffect(() => { */}
     
        <AttendanceModal
          Attendance={Attendance}
          show={modalShow}
          type={type}
          onHide={() => {
            setmodalShow(false);
            setAttendance(null);
          }}
          employee={emp}
        />
      {/* }, [])} */}
      <br />
      <div style={{ width: "400px", marginLeft: "450px" }}>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Enter Employee ID"
            className="mr-2"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <Button
            variant="outline-primary"
            onClick={() => {
              find();
             
            }}
          >
            Find
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AttendanceMark;

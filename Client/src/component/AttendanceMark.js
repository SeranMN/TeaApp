import React from 'react'
import Clock from './Clock'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'


import { FormControl } from 'react-bootstrap'
import AttendanceModal from './AttendanceModal'

const AttendanceMark = () => {
    const [modalShow, setmodalShow] = useState(false)
    return (
        <div style={{ marginLeft: '220px', marginTop:'20px'}}>
            <Clock />
            <br/>
            <div style={{width: "400px", marginLeft: "450px"}}>

            <Form className="d-flex">

                <FormControl

                    type="search"

                    placeholder="Enter Employee ID"

                    className="mr-2"

                    aria-label="Search"

                />{' '}

                 <Button variant="outline-primary" onClick = {() => setmodalShow(true)}>Find</Button> 

                </Form>
                <AttendanceModal show = {modalShow} onHide = {()=>setmodalShow(false)} />

        </div>


          
        </div>
    )
}

export default AttendanceMark

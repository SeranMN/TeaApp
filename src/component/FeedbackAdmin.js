import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap'


const FeedbackAdmin = () => {
    return (
        <div style={{marginLeft: "220px", marginRight: "10px"}}>
        <br/> 
        <h3>Feedbacks</h3>
        <br />
        <div className="report" style={{marginLeft: "400px"}}>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Enter Product ID"
                aria-label=""
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-primary" id="button-addon2">
                Generate Report
            </Button>
        </InputGroup>
        </div>
        <br />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Feedback ID</th>
                    <th>Product ID</th>
                    <th>E mail</th>
                    <th>Feedback Type</th>
                    <th>Description</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10</td>
                    <td>200</td>
                    <td>markotto@gmail.com</td>
                    <td>Happy</td>
                    <td></td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>300</td>
                    <td>jacobt@gmail.com</td>
                    <td>Normal</td>
                    <td></td>
                    <td>3</td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}

export default FeedbackAdmin

import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const Reportpage = () => {
    return (
        <div>
            <div style={{ marginLeft: "220px", marginTop: "20px", marginRight: "10px"}}>

<h3 style={{marginLeft: "750px", marginTop: "10px"}}>PRODUCT STOCK</h3>
<hr></hr> 
<DropdownButton id="dropdown-basic-button" title="Select Month">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
<hr></hr>
<Table striped bordered hover>
<thead>
<tr>

<th>Product ID</th>
<th>Quantity</th>
<th>Date</th>
</tr>
</thead>
<tbody>
<tr>

<td>Sp001</td>
<td>50</td>
<td>15 june 2021</td>
</tr>
<tr>
<td>Sp002</td>
<td>75</td>
<td>6 july 2021</td>

</tr>
<tr>
<td>Sp003</td>
<td >80</td>
<td>25 august 2021</td>
</tr>
</tbody>
</Table>
<Button style={{marginLeft: "750px"}} variant="primary" >Print PDF</Button>
</div>

        </div>
    )
}

export default Reportpage

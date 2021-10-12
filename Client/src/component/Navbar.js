
//import Button from '@restart/ui/esm/Button'
import React from 'react'
import {Button} from 'react-bootstrap'
import '../App.css'
//import jsPDF from 'jspdf'
import jsPDF from 'jspdf'


const Navbar = () => {
    return (
        <div className="vNavbar">

            <div className="vleftSide">
                <div className="vlinks">
                    <a href="/home1">Vehicles</a>
                    &nbsp
                    <a href="/home2">Delivery</a>
                </div>
            </div>
            
            <div className="vrightSide">
                <input type="text"
                placeholder="search.." 
                    //  type="text"
                    // name="vid"
                    // value={vid}
                    placeholder="Enter ID"
                />
                 {/* <button onkeyup="myFunction()">Search</button>
                <br/>
                &nbsp
                
                <Button onClick= {('')} >Report</Button>  */}
              
            </div>

        </div>

    )
}

export default Navbar



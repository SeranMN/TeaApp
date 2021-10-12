// import React, { useContext, useState, useEffect } from 'react';
// import { Button, Table } from 'react-bootstrap';
// import "./Home.css"
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Read from '../Read/Read';
// import ModalForm from '../ModalForm.js';
// import Navbar from '../Navbar';
// import Report from '../Report';
// const Home = () => {


    
//     const [editForm, showEditForm] = useState(false);
//     const [type, settype] = useState("")
//     const [vehicles, setVehicle] = useState([]);
//     const [vehicledetails, setVehicleDetails] = useState('')

//     useEffect(() => {
//         const getVehicles = () => {
//             axios
//                 .get("http://localhost:5000/vehicle")
//                 .then((res) => {
//                     setVehicle(res.data);
//                     console.log(res.data);
//                 })
//                 .catch((err) => {
//                     alert(err.msg);
//                 });
//         };
//         getVehicles();
//     }, []);

//     // function myFunction() {
//     //     var input, filter, table, tr, td, i, txtValue;
//     //     input = document.getElementById("myInput");
//     //     filter = input.value.toUpperCase();
//     //     table = document.getElementById("myTable");
//     //     tr = table.getElementsByTagName("tr");
//     //     for (i = 0; i < tr.length; i++) {
//     //         td = tr[i].getElementsByTagName("td")[0];
//     //         if (td) {
//     //             txtValue = td.textContent || td.innerText;
//     //             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//     //                 tr[i].style.display = "";
//     //             } else {
//     //                 tr[i].style.display = "none";
//     //             }
//     //         }
//     //     }
//     // }
//     //console.log(users);
//     return (
//         <div>
//             <Navbar />
//             <br/>
//             <Report/>

//             <Link to="/create">
//                 <Button className="create_btn" varient="primary">Add Vehicle</Button>
//             </Link>
//             <Table striped bordered hover>

//                 <thead>
//                     <tr>
//                         {/* <div className="vrightSide">
//                             <input type="text"
//                                 placeholder="search.."
//                                 type="text"
//                                 name="vid"
//                                 id="myInput"
//                                 placeholder="Enter ID"
//                             />
//                             <button id="myInput" onClick={myFunction()}>Search</button>

//                         </div> */}
//                     </tr>
//                     <tr>
//                         <th width="100">Registration No</th>
//                         <th width="115">Vehicle Type</th>
//                         <th width="110">Vehicle Model</th>
//                         <th width="100">Fuel Type</th>
//                         <th width="105">Owner</th>
//                         <th width="200">Action</th>

//                     </tr>
//                 </thead>
//                 {vehicles.map((vehicle) => (
//                     <tbody key={vehicle._id}>

//                         <tr>
//                             <td>{vehicle.vid}</td>
//                             <td>{vehicle.vtype}</td>
//                             <td>{vehicle.vmodel}</td>
//                             <td>{vehicle.ftype}</td>
//                             <td>{vehicle.owner}</td>
//                             <td>

//                                 <Button className="action_btn" variant="info" onClick={() => {
//                                     showEditForm(true)
//                                     setVehicleDetails(vehicle)
//                                     settype("Update")
//                                 }} style={{ cursor: 'pointer' }}>Edit</Button>


//                                 <Button className="action_btn" variant="danger"

//                                     onClick={() => {
//                                         showEditForm(true)
//                                         setVehicleDetails(vehicle)
//                                         settype("Delete")
//                                     }}
//                                     style={{ cursor: 'pointer' }}> Delete</Button>

//                                 <Button className="action_btn" variant="success" onClick={() => {
//                                     showEditForm(true)
//                                     setVehicleDetails(vehicle)
//                                     settype("Details")
//                                 }} style={{ cursor: 'pointer' }}
//                                 >Read</Button>

//                             </td>
//                         </tr>




//                     </tbody>
//                 ))}
//             </Table>
        
//             <ModalForm show={editForm} onHide={() => showEditForm(false)} vehicle={vehicledetails} type={type} />
//             <Read vehicledetails={vehicledetails} />

//         </div>
        
        
//     );
// };

// export default Home;



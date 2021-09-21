import React, { useContext, useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
//import { UserContext } from '../UserContext/UserContext';
import "./Home.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import Read from '../Read/Read';
//import ModalForm2 from './src/component/ModalForm2.js';
import ModelForm2 from '../ModelForm2.js';
//import Delivery from 'src/modal/Delivery.js';
import Navbar from '../Navbar';
const Home2 = () => {


    //const [empDet,setEmpDet] = useState ('')
    const [editForm1, showEditForm1] = useState(false);
    const [type, settype] = useState("")
    // const [users, setUsers] = useContext(UserContext);
    const [Deliverys, setDelivery] = useState([]);
    const [Deliverydetails, setDeliverydetails] = useState('')

    useEffect(() => {
        const getDeliverys = () => {
            axios
                .get("http://localhost:5000/delivery")
                .then((res) => {
                    setDelivery(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    alert(err.msg);
                });
        };
        getDeliverys();
    }, []);

    //console.log(users);
    return (
        <div>
            <Navbar/>

            <Link to="/create2">
                <Button className="create_btn" varient="primary">Add Delivery</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th width="80">Registration No</th>
                        <th width="50">Route</th>
                        <th width="100">Date</th>
                        <th width="100">Tea leaves</th>
                        <th width="100">Distance</th>
                        <th width="100">Driver</th>
                        <th width="100">Action</th>

                    </tr>
                </thead>
                {Deliverys.map((Delivery) => (
                    <tbody key={Delivery._id}>

                        <tr>
                            <td>{Delivery.id1}</td>
                            <td>{Delivery.route}</td>
                            <td>{Delivery.date}</td>
                            <td>{Delivery.tea}</td>
                            <td>{Delivery.distance}</td>
                            <td>{Delivery.driver}</td>
                            <td>

                                <Button className="action_btn" variant="info" onClick={() => {
                                    showEditForm1(true)
                                    setDeliverydetails(Delivery)
                                    settype("Update")
                                }} style={{ cursor: 'pointer' }}>Edit</Button>


                                <Button className="action_btn" variant="danger"

                                    onClick={() => {
                                        showEditForm1(true)
                                        setDeliverydetails(Delivery)
                                        settype("Delete")
                                    }}
                                    style={{ cursor: 'pointer' }}> Delete</Button>

                                <Button className="action_btn" variant="success" onClick={() => {
                                    showEditForm1(true)
                                    setDeliverydetails(Delivery)
                                    settype("Details")
                                }} style={{ cursor: 'pointer' }}
                                >Read</Button>

                            </td>
                        </tr>




                    </tbody>
                ))}
            </Table>
            <ModelForm2 show={editForm1} onHide={() => showEditForm1(false)} Delivery={Deliverydetails} type={type} />
            <Read Deliverydetails={Deliverydetails} />

        </div>
    );
};

export default Home2;



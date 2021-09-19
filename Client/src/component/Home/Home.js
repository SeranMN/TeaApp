import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import "./Home.css"
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setUsers] = useContext(UserContext);

    console.log(users);
    return (
        <div>
            
            <Link to="/create">
            <Button className="create_btn" varient="primary">Add Vehicle</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width="100">Registration No</th>
                        <th width="115">Vehicle Type</th>
                        <th width="110">Vehicle Model</th>
                        <th width="100">Fuel Type</th>
                        <th width="105">Owner</th>
                        <th width="200">Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.vtype}</td>
                                <td>{user.position}</td>
                                <td>{user.salary}</td>
                                <td>{user.owner}</td>
                                <td>
                                    <Link to={"/edit/"+user.id}>
                                    <Button className="action_btn" variant="info">Edit</Button>
                                    </Link>
                                    <Link to={"/delete/"+user.id}>
                                    <Button className="action_btn" variant="danger">Delete</Button>
                                    </Link>
                                    <Link to={"/read/"+user.id}>
                                    <Button className="action_btn" variant="success">Read</Button>
                                    </Link>
                                </td>
                            </tr>)

                    }


                </tbody>
            </Table>

        </div>
    );
};

export default Home;



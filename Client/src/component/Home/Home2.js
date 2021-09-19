import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import "./Home.css"
import { Link } from 'react-router-dom';


const Home2 = () => {
    const [users, setUsers] = useContext(UserContext);

    console.log(users);
    return (
        <div>
            
            <Link to="/create2">
            <Button className="create_btn" varient="primary">Add Delivery</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width="1">Delivery ID 1</th>
                        <th width="11">Name</th>
                        <th width="110">Position</th>
                        <th width="100">Salary</th>
                        {/* <th width="100">Distance</th>
                        <th width="100">Driver</th> */}
                        <th width="200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.position}</td>
                                <td>{user.salary}</td>
                                {/* <td>{user.distance}</td>
                                <td>{user.driver}</td> */}
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

export default Home2;



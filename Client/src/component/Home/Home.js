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
            <h1> I am Home</h1>
            <Link to="/create">
            <Button className="create_btn" varient="primary">Create Vehicle</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
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
                                <td>
                                    <Button className="action_btn" variant="info">Edit</Button>
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



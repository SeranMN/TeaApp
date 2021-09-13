import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';

const Create = () => {
    const [users, setUsers] = useContext(UserContext);
    return (
        <div>
            <h1>Create</h1>
        </div>
    )
}

export default Create;

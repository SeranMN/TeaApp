import React from 'react';
import Table from "react-bootstrap/Table";
import { useState } from "react";

const SupplierProfileTable = ({Date,profile}) => {
    const [profileData, setProfileData] = useState([
      {
        Date: "2021-09-5",
        Weight: 500,
      },

      {
        Date: "2021-09-4",
        Weight: 1500,
      },

      {
        Date: "2021-09-2",
        Weight: 3210,
      },
    ]);
    return (
        <div className="profTable">
            <h1 style={{marginLeft: "33%"}}><i><u>My Records</u></i></h1>
            <br/><br/>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight (kg)</th>
            </tr>
          </thead>
          {profileData.map((profile) => (
            <tbody key={profile.Date}>
              <tr>
                <td>{profile.Date}</td>
                <td>{profile.Weight}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
}

export default SupplierProfileTable

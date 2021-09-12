import React from 'react'
import Card from 'react-bootstrap/Card'


const Profile = () => {
    return (
        <div className="profile"> 
           
            <div>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src="./images/userimg.png" />
                <Card.Body>
                    <Card.Title>Lasal Thilakarathne</Card.Title>
                </Card.Body>
            </Card>
            <br /><br />
            <Card>
                <Card.Body>lasalt@gmail.com</Card.Body>
            </Card>
            <Card>
                <Card.Body>No.32, Samanala Mawatha, Thihagoda, Matara.</Card.Body>
            </Card>
            <Card>
                <Card.Body>982746890V</Card.Body>
            </Card>
            <Card>
                <Card.Body>0712345689</Card.Body>
            </Card>
            </div>
            
        </div>
    )
}

export default Profile

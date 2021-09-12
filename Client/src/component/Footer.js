import React from 'react'
import Card from 'react-bootstrap/Card'
const Footer = () => {
    return (
        <Card className="text-center" fixed="bottom">
        <Card.Header>Gangasiri Tea</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
         
        </Card.Body>
        <Card.Footer className="text-muted">© Experts' Code Solutions</Card.Footer>
      </Card>
    )
}

export default Footer

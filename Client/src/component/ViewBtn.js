import React from 'react'
import Button from 'react-bootstrap/Button'


const ViewBtn = ({onClick}) => {
  return (
    <Button variant="primary" onClick={onClick}>View</Button>

  )
}

export default ViewBtn

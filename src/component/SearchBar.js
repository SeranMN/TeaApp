import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FormControl } from 'react-bootstrap'

const SearchBar = () => {
  return (
      <div style={{width: "400px", marginLeft: "450px"}}>

          <Form className="d-flex">

              <FormControl

                  type="search"

                  placeholder="Appointment ID"

                  className="mr-2"

                  aria-label="Search"

              />

              <Button variant="outline-primary">Search</Button>

              </Form>

      </div>
  )
}

export default SearchBar
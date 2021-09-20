import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FormControl } from 'react-bootstrap'

const proSearchBar = () => {
    return (
        <div style={{width: "400px", marginLeft: "750px"}}>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search Products"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
                </Form>
        </div>
    )
}

export default proSearchBar

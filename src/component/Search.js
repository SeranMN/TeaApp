import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react'
import { FormControl } from 'react-bootstrap'

{ /*const Search = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Customers</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Customers"
            name="s" 
        />
        <button type="submit">Search</button> 
</form> 

);

export default Search; */ }



const Search = () => {
    return (
        <div style={{width: "400px", marginLeft: "450px"}}>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search Customers"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
                </Form>
        </div>
    )
}

export default Search

import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";

const SearchBar = () => {
    return (
      <div style={{ width: "400px", marginLeft: "25%" }}>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Supplier"
            className="mr-2"
            aria-label="Search"
          />

          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    );
}

export default SearchBar

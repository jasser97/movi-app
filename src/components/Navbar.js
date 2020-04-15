import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
const MyNavbar = (props) => {
  return (
    <Navbar className="navbar" bg="dark">
      <Nav className="mr-auto">
        <Link to="/add" className="item">
          Add Movie
        </Link>
      </Nav>
      <Navbar.Brand style={{ marginLeft: 30 }} className="mr-auto">
        <Link className="item" to="/">
          MovieList
        </Link>
      </Navbar.Brand>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={props.keyValue.myValue}
          onChange={(e) =>
            props.setkeyValue({ ...props.keyValue, myValue: e.target.value })
          }
        />
        <Button
          onClick={() =>
            props.setkeyValue({
              ...props.keyValue,
              keyWord: props.keyValue.myValue,
            })
          }
          variant="outline-info"
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default MyNavbar;

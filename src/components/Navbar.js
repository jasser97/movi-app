import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
const MyNavbar = (props) => {
  return (
    <Navbar className="navbar" bg="dark">
      <Nav className="mr-auto">
        <Link to="/" className="item">
          Add Movie
        </Link>
      </Nav>
      <Navbar.Brand style={{ marginLeft: 30 }} className="mr-auto">
        <Link className="item" to="/list">
          MovieList
        </Link>
      </Navbar.Brand>
      <div style={{ marginRight: 20 }}>
        <ReactStars
          half={false}
          onChange={props.ratingChanged}
          count={5}
          size={24}
          value={0}
          color2={"#ffd700"}
        />
      </div>
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

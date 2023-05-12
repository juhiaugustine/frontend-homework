import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/search">
            Search
          </Nav.Link>
          <Nav.Link as={Link} to="/houses">
            Houses
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavigationBar;

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          WhateverNow
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/accountsettings">
            Account Settings
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/signup">
            Sign Up
          </Nav.Link>
          <Nav.Link as={NavLink} to="/logout">
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

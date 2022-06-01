import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">WhateverNow</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Account Settings</Nav.Link>
          <Nav.Link href="">Login</Nav.Link>
          <Nav.Link href="">Sign Up</Nav.Link>
          <Nav.Link href="">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

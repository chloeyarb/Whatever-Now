import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="nav-back">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h1 className="fw-light Nav-list">
            {" "}
            Whatever<span className="fw-lighter">Now</span>
          </h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/accountsettings" className="Nav-list">
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

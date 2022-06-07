import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  return (
    <Navbar className="nav-back" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h1 className="fw-light Nav-list">
            Whatever<span className="fw-lighter">Now</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {Auth.LoggedIn() ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/accountsettings"
                  className="Nav-list fs-5  mt-1"
                >
                  Account Settings
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/logout"
                  onClick={Auth.logout}
                  className="Nav-list fs-5 mt-1"
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className="Nav-list fs-5  mt-1"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/signup"
                  className="Nav-list fs-5 mt-1"
                >
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

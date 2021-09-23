import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <Navbar fixed="top" className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link className="nav-link" to="/products">
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/new">
                  New
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
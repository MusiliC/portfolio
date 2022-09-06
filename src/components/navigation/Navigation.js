import React from "react";
import { Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="mx-5 ms-3 fw-bold">
          Personal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/" className="mx-3 fw-bold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="mx-3 fw-bold">
              Projects
            </Nav.Link>

            <div className="mx-5 ms-3 ">
              <Nav.Link as={Link} to="/contact">
                <Button variant="warning" className="">
                  Contact Me
                </Button>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

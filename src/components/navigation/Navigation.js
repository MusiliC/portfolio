import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="mx-5 ms-3 fw-bold">
          Personal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-3 fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="mx-3 fw-bold">
              Projects
            </Nav.Link>
            
            <div className="mx-5 ms-3">
              <Button variant="warning" className="">
                Contact Me
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

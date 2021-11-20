import React from "react";

// react-bootstrap components
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const HeadNav = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Exam Quiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Dashboard</Nav.Link>
              <Nav.Link>Purchase</Nav.Link>
              <Nav.Link>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeadNav;

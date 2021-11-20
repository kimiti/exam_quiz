import React from "react";

// react-bootstrap components
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Nav.Link>
                {" "}
                <Link to="/">Home </Link>
              </Nav.Link>

              <Nav.Link>
                {" "}
                <Link to="/dashboard">Dashboard </Link>
              </Nav.Link>
              <Nav.Link>Purchase</Nav.Link>

              <Nav.Link>
                {" "}
                <Link to="/login"> Login </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeadNav;

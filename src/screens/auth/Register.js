import React from "react";

import { Link } from "react-router-dom";
// react-bootstrap components
import { Container, Form, Button, Row, Col } from "react-bootstrap";
const Register = () => {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h1>Login</h1>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
            </Form.Group>

            <Button className="mt-3" type="submit" variant="primary">
              Login
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              New GCC-app User? <Link to="/register">Register</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Register;

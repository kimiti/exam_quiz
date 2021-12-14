import React, { useState, useEffect } from "react";

import { Link, Navigate } from "react-router-dom";
// react-bootstrap components
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { register } from "../../actions/auth";

import { connect } from "react-redux";

const Register = ({ register, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    register(email, password);
  };

  if (auth.uid) return <Navigate to="/" />;
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12}>
            <h1>Register</h1>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button className="mt-3" type="submit" variant="primary">
                Login
              </Button>
            </Form>

            <Row className="py-3">
              <Col>
                New GCC-app User? <Link to="/login">Login</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

export default connect(mapStateToProps, { register })(Register);

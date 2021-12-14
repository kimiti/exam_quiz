import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
// react-bootstrap components
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (auth.uid) return <Navigate to="/" />;
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12}>
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
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
                New exam quiz User? <Link to="/register">Register</Link>
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
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, { login })(Login);

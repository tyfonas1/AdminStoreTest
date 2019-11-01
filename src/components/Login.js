import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Admin from "../Admin";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    authentication: false
  };

  handleChangeUsername = event => {
    this.setState({ username: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    if (
      this.state.username === "tyfonas1" &&
      this.state.password === "tyfonas..."
    ) {
      this.setState({ authentication: true });
    } else {
      alert("false");
    }
    event.preventDefault();
  };

  render() {
    if (this.state.authentication == true) {
      return <Admin />;
    } else {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="Username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.handleChangeUsername}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </Form.Group>
            <Form.Group controlId="Remember">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      );
    }
  }
}

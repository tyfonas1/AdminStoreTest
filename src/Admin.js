import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header";
import { Row, Col } from "react-bootstrap";
import { Container } from "@material-ui/core";
export default class Admin extends Component {
  render() {
    return (
      
      <Container maxWidth={1}>
          <Row>
            <Header />
          </Row>
          <Row>
            <Col sm>
              <Navbar />
            </Col>
            <Col sm={9}></Col>
          </Row>
        </Container>
      
    );
  }
}

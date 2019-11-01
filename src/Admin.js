import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";

export default class Admin extends Component {
  render() {
    return (
      <div className="allwrapper">
        <Container>
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
      </div>
    );
  }
}

import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import { Grid, Container } from "@material-ui/core";
export default class Home extends Component {
  render() {
    return (
      <div className="sitebgimg">
        <Container maxWidth="lg">
          <Header />
        </Container>
      </div>
    );
  }
}

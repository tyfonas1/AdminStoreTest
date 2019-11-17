import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Body from "./Body";
import { Grid, Container } from "@material-ui/core";
export default class Home extends Component {
  render() {
    return (
      <div className="sitebgimg">
        <Container maxWidth="lg">
          <Header />
        </Container>

        <div className="body">
          <Container maxWidth="lg">
          <Grid item xs={12}>
            <Body />
          </Grid>
          <Grid>
            
          </Grid>
          </Container>
        </div>
        </div>
    );
  }
}

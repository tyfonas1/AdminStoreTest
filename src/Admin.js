import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Grid from "@material-ui/core/Grid";
export default class Admin extends Component {
  render() {
    return (
      <div className="adminbg">
        <Grid container>
          <Grid item xs={12}>
            <h1 className="header">Admin</h1>
          </Grid>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
        </Grid>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "../App.css";
export default class Header extends Component {
  render() {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    return (
      <div className="header">
        <Grid container spacing={5} maxwidth={1}>
          <Grid item xs={9}>
            <h1>Admin panel</h1>
          </Grid>
          <Grid item xs={3}>
            <h3>
              {date}/{month}/{year}
            </h3>
          </Grid>
        </Grid>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "../App.css";
export default class Header extends Component {
  render() {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    return (
      // <div class="container-fluid">
      <div className="header">
        
        <Grid container spacing={5} maxwidth={1}>
          <Grid item xs={9}>
            <h1>Admin panel</h1>
          </Grid>
          <Grid item xs={3}>
            {date}/{month}/{year}
          </Grid>
        </Grid>

        {/* <div class="row">
            <div class="col-sm  ">
              <h1>Admin panel</h1>
            </div>

            <div class="col-lg-2 col-sm-4 col-md-3 pt-2">
              <h3>
                {date}/{month}/{year}
              </h3>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

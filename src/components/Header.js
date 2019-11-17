import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "../App.css";
import Logo from "../images/logo.png";
import { TextField } from "@material-ui/core";
export default class Header extends Component {
  render() {
    
    return (
      
      <div className="wrapper">
        <div className="header">
          <Grid container spacing={0} alignItems="center" justify="center">
            <Grid item xs={6} md={9} lg={9}>
              <img src={Logo} className="logoimg" />
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <form className="searchfield">
                <TextField
                  id="standard-search"
                  label="Search field"
                  type="search"
                  margin="normal"
                  color="white"
                  InputProps={{
                    style: {
                        color: "white"
                    }
                }}
                />
              </form>
            </Grid>
          </Grid>
        </div>
        
      </div>
    );
  }
}

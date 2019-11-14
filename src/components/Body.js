import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { List, ListItem, Divider, ListItemText } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "../App.css";
export default class SiteNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <Grid container>
          <Grid item lg={2}>
            <List component="nav">
              <ListItem button>
                <Link to="/" className="link">
                  Home
                </Link>
              </ListItem>
              <Divider />
              <ListItem button>
                <Link to="/Champions" className="link">
                  Champions
                </Link>
              </ListItem>
              <Divider />
              <ListItem button>
                <Link to="/Items" className="link">
                  Items
                </Link>
              </ListItem>
            </List>
            <Divider />
          </Grid>
        </Grid>
      </div>
    );
  }
}

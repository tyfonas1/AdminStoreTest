import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { List, ListItem, Divider, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";
import Champions from "./Champions";
import Items from "./Items";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class SiteNav extends Component {
  render() {
    return (
      <Router>
        <div className="sidenav">
          <Grid container>
            <Grid item xs={2}>
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
            <Grid item xs={10}>
              <Switch>
                <Route path="/Champions" component={Champions} />
                <Route path="/Items" component={Items} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

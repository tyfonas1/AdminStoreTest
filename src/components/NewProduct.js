import React from "react";
import "../App.css";
import { TextField, Button, Hidden, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    width: "100%"
  },
  paper: {
    color: "blue"
  },
  textField: {
    marginLeft: "5%",
    marginRight: "5%",
    width: "60%"
  }
}));

export default function NewProduct() {
  const classes = useStyles();

  return (
    <div>
      <Hidden mdUp>
        <h2 className="mobiletabname">New Product</h2>
      </Hidden>
      <Grid constainer className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <form noValidate autoComplete="off">
            <Paper className={classes.paper}>
              <Grid lg={12}>
                <TextField
                  id="code"
                  label="Code"
                  className={classes.textField}
                  type="text"
                  margin="normal"
                />
              </Grid>
              <Grid lg={12}>
                <TextField
                  id="sku"
                  label="Sku"
                  className={classes.textField}
                  type="text"
                  margin="normal"
                />
              </Grid>
              <Grid lg={12}>
                <TextField
                  id="model"
                  label="Model"
                  className={classes.textField}
                  type="text"
                  margin="normal"
                />
              </Grid>
              <Grid lg={12}>
                <TextField
                  id="manufacturer"
                  label="Manufacturer"
                  className={classes.textField}
                  type="text"
                  margin="normal"
                />
              </Grid>
              <Grid lg={12}>
                <input accept="image/*" className="inputfile" type="file" />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="raised"
                    component="span"
                    className={classes.button}
                  >
                    Upload Image
                  </Button>
                </label>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import {TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function NewProduct() {
  
  const classes = useStyles();
    
    return (
      <form className={classes.container} noValidate autoComplete="off">
      <div>
        
        
        <TextField
          id="code"
          label="Code"
          className={classes.textField}
          type="text"
          
          margin="normal"
          variant="outlined"
        />
        
      </div>
      </form>
    );
  }


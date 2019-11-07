import React from "react";
import Orders from "./Orders";
import Products from "./Products";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid, Hidden, withWidth, AppBar } from "@material-ui/core";
import NewProduct from "./NewProduct";
import { IoIosAddCircle, IoLogoDropbox, IoIosGrid } from "react-icons/io";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "34495e",
    display: "flex"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Hidden only="xs">
        <Grid item lg={1} md={2}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Orders" {...a11yProps(0)} />
            <Tab label="Products" {...a11yProps(1)} />
            <Tab label="New Product" {...a11yProps(2)} />
          </Tabs>
        </Grid>
        <Grid item xs={12} lg="11" md="10">
        <TabPanel value={value} index={0}>
          <Orders />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Products />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <NewProduct />
        </TabPanel>
      </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid item xs={12}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label={<IoIosGrid />} {...a11yProps(0)} />
              <Tab label={<IoLogoDropbox />} {...a11yProps(1)} />
              <Tab label={<IoIosAddCircle />} {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Orders />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Products />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <NewProduct />
          </TabPanel>
        </Grid>
      </Hidden>
      
    </div>
  );
}
export default withWidth()(VerticalTabs);

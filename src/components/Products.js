import React, { Component } from "react";
import image from "../images/1.jpg";
import NewProduct from "./NewProduct";
import { IoIosKeypad } from "react-icons/io";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
export default class Products extends Component {
  render() {
    const photostyle = {
      height: "70px",
      width: "auto",
      display: "block",
      margin: "0 auto"
    };

    return (
      <div>
        <h1>
          <IoIosKeypad />
          Products
        </h1>

        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">SKU</TableCell>
                <TableCell align="center">Model</TableCell>
                <TableCell align="center">Manufacturer</TableCell>
                <TableCell align="center">Photo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">1001</TableCell>
                <TableCell align="center">GTX 1080 TI</TableCell>
                <TableCell align="center">MSI</TableCell>
                <TableCell>
                  <img src={image} style={photostyle} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">1001</TableCell>
                <TableCell align="center">GTX 1080 TI</TableCell>
                <TableCell align="center">MSI</TableCell>
                <TableCell>
                  <img src={image} style={photostyle} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>

        {/* <Tabs
          variant="pills"
          defaultActiveKey="Products"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="Products" title="Products">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>SKU</th>
                  <th>Model</th>
                  <th>Manufacturer</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1001</td>
                  <td>GTX 1080 TI</td>
                  <td>MSI</td>
                  <td>
                    <img src={image} style={photostyle} />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1002</td>
                  <td>GTX 1080 TI OC</td>
                  <td>Gigabyte</td>
                  <td>
                    <img src={image} style={photostyle} />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1003</td>
                  <td>GTX 1070 TI</td>
                  <td>MSI</td>
                  <td>
                    <img src={image} style={photostyle} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="NewProduct" title="+New Product">
            <NewProduct />
          </Tab>
        </Tabs> */}
      </div>
    );
  }
}

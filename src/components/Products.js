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

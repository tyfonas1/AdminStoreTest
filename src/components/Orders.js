import React, { Component } from "react";
import "../App.css";
import { FaPencilAlt, FaFileInvoiceDollar } from "react-icons/fa";
import Table from "@material-ui/core/Table";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

export default class Orders extends Component {
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
          <FaFileInvoiceDollar /> / Orders
        </h1>
        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Payment</TableCell>
                <TableCell align="center">Shipping</TableCell>
                <TableCell align="center">Customer</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Submitted</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <FaPencilAlt />
                </TableCell>
                <TableCell align="center">A10001</TableCell>
                <TableCell align="center">Pending</TableCell>
                <TableCell align="center">180.34 €</TableCell>
                <TableCell align="center">Paypal</TableCell>
                <TableCell align="center">Courier</TableCell>
                <TableCell align="center">Μακης Γκουτζελουδης</TableCell>
                <TableCell align="center">6947584569</TableCell>
                <TableCell align="center">31/10/2019</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">
                  <FaPencilAlt />
                </TableCell>
                <TableCell align="center">A10001</TableCell>
                <TableCell align="center">Pending</TableCell>
                <TableCell align="center">180.34 €</TableCell>
                <TableCell align="center">Paypal</TableCell>
                <TableCell align="center">Courier</TableCell>
                <TableCell align="center">Μακης Γκουτζελουδης</TableCell>
                <TableCell align="center">6947584569</TableCell>
                <TableCell align="center">31/10/2019</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

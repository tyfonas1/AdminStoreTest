import React, { Component } from "react";
import "../App.css";
import { Table } from "react-bootstrap";
import { FaPencilAlt, FaFileInvoiceDollar } from "react-icons/fa";
export default class Orders extends Component {
  render() {
    return (
      <div>
        <h1>
          <FaFileInvoiceDollar /> / Orders
        </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Code</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Shipping</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#">
                  <FaPencilAlt />
                </a>
              </td>
              <td>A10001</td>
              <td>Pending</td>
              <td>180.34 €</td>
              <td>Paypal</td>
              <td>Courier</td>
              <td>Μακης Γκουτζελουδης</td>
              <td>6947584569</td>
              <td>31/10/2019</td>
            </tr>
            <tr>
              <td>
                <a href="#">
                  <FaPencilAlt />
                </a>
              </td>
              <td>A10002</td>
              <td>Pending</td>
              <td>100.36 €</td>
              <td>Paypal</td>
              <td>Παραλαβή απο το κατάστημα</td>
              <td>Γιώργος Γκουτζελουδης</td>
              <td>6947554334</td>
              <td>31/10/2019</td>
            </tr>
            <tr>
              <td>
                <a href="#">
                  <FaPencilAlt />
                </a>
              </td>
              <td>A10003</td>
              <td>Complete</td>
              <td>32 €</td>
              <td>Credit Card</td>
              <td>Παραλαβή απο το κατάστημα</td>
              <td>Γιάννης Καλησπερόπουλόπουλος</td>
              <td>6947538934</td>
              <td>31/10/2019</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

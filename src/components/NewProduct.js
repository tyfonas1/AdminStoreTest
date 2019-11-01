import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
export default class NewProduct extends Component {
  render() {
    return (
      <div>
        <h5>New Product</h5>
        <Form>
          <Form.Group controlId="Title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Products Title" />
          </Form.Group>
          <Form.Group controlId="SKUNumber">
            <Form.Label>SKU Number</Form.Label>
            <Form.Control type="number" placeholder="Enter SKU Number" />
          </Form.Group>
          <Form.Group controlId="Model">
            <Form.Label>Model</Form.Label>
            <Form.Control type="text" placeholder="Enter Products Model" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

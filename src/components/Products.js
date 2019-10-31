import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import image from '../images/1.jpg'
import {Nav , Tabs  } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab'
import Orders from './Orders';
import NewProduct from './NewProduct';
export default class Products extends Component {
    render() {
        const photostyle = {
            height:"70px",
            width:"auto",
            display: "block",
            margin: "0 auto"
          };
        
        
        return (
            <div>
              <h1>Products</h1>
                {/* <button type="button" class="btn btn-primary mt-3" >+NEW PRODUCT</button> */}
                <Tabs variant="pills" defaultActiveKey="Products" id="uncontrolled-tab-example">
                  
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
      <td><img src={image} style={photostyle}/></td>
    </tr>
    <tr>
      <td>2</td>
      <td>1002</td>
      <td>GTX 1080 TI OC</td>
      <td>Gigabyte</td>
      <td><img src={image} style={photostyle}/></td>
    </tr>
    <tr>
      <td>3</td>
      <td>1003</td>
      <td>GTX 1070 TI</td>
      <td>MSI</td>
      <td><img src={image} style={photostyle}/></td>
    </tr>
  </tbody>
                </Table>
                </Tab>
                <Tab eventKey="NewProduct" title="+New Product">
                    <NewProduct />
                  </Tab>
                </Tabs>
            </div>
        )
    }
}

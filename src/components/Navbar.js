import React, { Component } from 'react';
import '../App.css';
import Products from './Products';
import {Nav , Tabs  } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab'
import Orders from './Orders';
export default class Navbar extends Component {
    render() {
        return (
            <div>
              
              <Tabs variant="tabs" defaultActiveKey="orders" id="uncontrolled-tab-example">
                <Tab eventKey="orders" title="Orders">
                <Orders />
                </Tab>
                <Tab eventKey="products" title="Products">
                <Products />
                </Tab>
                
              </Tabs>
  
            
            </div>
            
        )
    }
}

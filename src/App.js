import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Products from './components/Products';
import Header from './components/Header';
import {Container , Row , Col} from 'react-bootstrap'
function App() {
  return (
    <div className="allwrapper">
    
    <Container>
      <Row>
        <Header/>
        </Row>
        <Row>
    <Col sm>
      <Navbar />
    </Col>
    <Col sm={9}>
      
    </Col>
    </Row>
  </Container>

  
  </div>
  );
}

export default App;

import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './Navbar.css';
function Navigationbar(){
    return(
    <Navbar className="sticky"  expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link style={{color:"white"}} href="#home">About</Nav.Link>
          <Nav.Link style={{color:"white"}} href="#experience">Experience</Nav.Link>
          <Nav.Link style={{color:"white"}} href="#projects">Projects</Nav.Link>
          <Nav.Link style={{color:"white"}} href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default Navigationbar;


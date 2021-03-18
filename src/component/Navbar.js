import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";


class Navbar extends Component {


  render() {
    return (

      <ReactBootStrap.Navbar bg="primary" expand="lg">

        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/contact">Contect Us</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/about">About Us</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/blog">Blog</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/inf">Information</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/admin">Admin</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>


        </ReactBootStrap.Navbar.Collapse>
 
      </ReactBootStrap.Navbar>

    )


  }


}
export default Navbar;
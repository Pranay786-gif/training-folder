import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
  return (
    /*<nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar_left">
        <a href="./">Preview</a>
      </div>
      <div className="navbar_right">
       
      </div>
    </nav>*/
    <ReactBootStrap.Navbar bg="secondary"   expand="lg">

    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="/">Preview</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>


    </ReactBootStrap.Navbar.Collapse>

  </ReactBootStrap.Navbar>
  

  );
};
export default Navbar;

import React from 'react';
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import logo from "../images/logo.png";


function NavBar() {
    return (
      <>
      <Navbar expand="lg" bg="lg" variant='="light'>
        <Container>
          <Navbar.Brand href="#home">
          <Image
                src={logo}
              style={{height: "50px" }}
            /> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
  }
  
  export default NavBar;
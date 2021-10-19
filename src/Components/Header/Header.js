

import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Header.css'


const Header = () => {
  const { user, logOut } = useAuth();
  return (

    <div >
      <Navbar bg="success" collapseOnSelect expand="lg">
        <Container>

          <div className="mx-5"> <img  src="" alt="" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className="navBtn" to="/home" >Home</NavLink>
              <NavLink className="navBtn" to="/services" >Services</NavLink>
              <NavLink className="navBtn" to="/about" >About Us</NavLink>
              {
                user.email ?
                  <button onClick={logOut}> Log Out </button>
                  :
                  <NavLink className="navBtn" to="/login" >Login</NavLink>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar bg="success" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink className="navBtn" to ="/home" >Home</NavLink>
      <NavLink className="navBtn" to="/services" >Services</NavLink>
      <NavLink className="navBtn" to ="/about" >About Us</NavLink>
      {
          user.email ?
          <button onClick={logOut}> Log Out </button>
          :
          <NavLink className="navBtn" to ="/login" >Login</NavLink>}
    </Nav>
    </Container>
  </Navbar> */}
    </div>
  );
};

export default Header;
{/* <Nav className="me-auto">
  <NavLink className="navBtn" to="/home" >Home</NavLink>
  <NavLink className="navBtn" to="/services" >Services</NavLink>
  <NavLink className="navBtn" to="/about" >About Us</NavLink>
  {
    user.email ?
      <button onClick={logOut}> Log Out </button>
      :
      <NavLink className="navBtn" to="/login" >Login</NavLink>}
</Nav> */}




import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
              <NavLink className="navBtn" to="/blog" >Blog</NavLink>
              {
                user.email ?
                  <button onClick={logOut}> Log Out </button>
                  :
                  <NavLink className="navBtn" to="/login" >Login</NavLink>}
                  <h4>Name : {user.displayName}</h4>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;


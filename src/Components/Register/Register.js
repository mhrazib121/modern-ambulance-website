import React, { useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';


const Register = () => {
    const {createNewUser, handleName, handleEmail, handlePassword, error}= useAuth()

    
    return (
        <div className="text-primary p-5  ">
        <h1> Please Register</h1>
  
        <Form  className="container">
          <Form.Group as={Row} className="mb-3 m-auto w-50" controlId="formHorizontalEmail">
            <Form.Label column sm={10}>
              Name
            </Form.Label>
            <Col sm={10}>
  
              {/* Name field  */}
              <Form.Control onBlur={handleName} type="text" placeholder="Enter your name" required />
            </Col>
          </Form.Group>


          <Form.Group as={Row} className="mb-3 m-auto w-50" controlId="formHorizontalEmail">
            <Form.Label column sm={10}>
              Email
            </Form.Label>
            <Col sm={10}>
  
              {/* email field  */}
              <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required />
            </Col>
          </Form.Group>
  
  
          <Form.Group as={Row} className="mb-3 m-auto w-50" controlId="formHorizontalPassword">
            <Form.Label column sm={10}>
              Password
            </Form.Label>
            <Col sm={10}>
              {/* Password field  */}
              <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3 m-auto w-50" controlId="formHorizontalCheck">
            <Col sm={{ span: 10 }}>
            <Link to="/login"> Have already an account. </Link>
            </Col>
          </Form.Group>
   
          <Form.Group as={Row} className="mb-3 m-auto w-50">
            <Col sm={{ span: 10 }}>
              <div className="text-danger mb-3">{error}</div>
              <Button onClick={createNewUser} type="submit">Register</Button>
            </Col>
          </Form.Group>
        </Form>
        {/* <div className="container text-warning"> {error}</div>
        <button onClick={handaleSignIn} > sign in new</button> */}
      </div>
    );
};

export default Register;
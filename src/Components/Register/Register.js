import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/authentication.init';
import { Col, Form, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

initializeAuthentication();
const Register = () => {
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const auth = getAuth();

    const createNewUser = (event) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // setUser(user);
                console.log(user);
                // event.preventDedault();
            })
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div className="text-primary p-5  ">
        <h1> Please Register</h1>
  
        <Form onSubmit={createNewUser} className="container">
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
              <Form.Check label="Have already account?" />
            </Col>
          </Form.Group>
   
          <Form.Group as={Row} className="mb-3 m-auto w-50">
            <Col sm={{ span: 10 }}>
              <Button type="submit">Register</Button>
            </Col>
          </Form.Group>
        </Form>
        {/* <div className="container text-warning"> {error}</div>
        <button onClick={handaleSignIn} > sign in new</button> */}
      </div>
    );
};

export default Register;
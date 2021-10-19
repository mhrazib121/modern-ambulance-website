
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {serviceName, description, img} = props.service;
    console.log(serviceName);
    return (
        <div>
        <Col className="shadow-lg">
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <div>
                    
                        <h6> {description}</h6>
                    </div>
                  
                    <Link className="details-btn" to ="/details"> L details </Link>
                    {/* <button className="btn btn-success">Details</button> */}
                </Card.Body>
            </Card>
        </Col>
    </div>
    );
};

export default Product;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Product from '../Product/Product';

const Services = () => {
    const [services] = useService();
    return (
        <Container>
                <Row className="g-3 m-3" xs={1} md={3} >
                {
                services.map(service =>
                    <Product key={service.id} service={service}></Product>
                )
            }
                </Row>
            </Container>
    );
};

export default Services;
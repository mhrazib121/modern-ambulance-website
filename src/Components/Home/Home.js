import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import './Home.css'
import useService from '../../Hooks/useService';
import Product from '../Product/Product';

const Home = () => {
    const [services] = useService();
    console.log(services)
    return (
        <div>
            {/* Carosel Section  */}
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-photo/emergency-paramedic-doctor-nurse-standing-back-ambulance_42667-1850.jpg"
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/f2/b8/81/f2b8814be665376e69fabc31eeff7f20.jpg"
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/cityscape-with-hospital-building-ambulance-car_107791-2694.jpg"
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>


            {/* Service Section  */}
            <Container>
                <Row className="g-3 m-3" xs={1} md={3} >
                    {
                        services.slice(0, 6).map(service =>
                            <Product key={service.id} service={service}></Product>
                        )
                    }
                </Row>
            </Container>

            {/* Testimonial  */}
            <h1 className = "m-5 "> Testimonial</h1>
            <Carousel className="container m-5">
                
                <Carousel.Item className="" interval={1000}>
                    <div className="d-flex justify-content-center p-4">
                        <img
                            className="d-block p-3 m-3 w-25"
                            src="https://image.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg"
                            alt="First slide"
                        />
                        <div className="mt-5 p-3 w-50">
                           
                            <p>We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block w-25 p-3 m-3"
                            src="https://image.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg"
                            alt="Second slide"
                        />
                        <div className="mt-5 p-3 w-50">
                        
                            <p>Great customer service! The man I spoke with was very helpful in answering questions as well as helping in finding the best hotel for my husband and I.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block w-25 p-3 m-3"
                            src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
                            alt="Third slide"
                        />
                        <div className="mt-5 p-3 w-50">
                            
                            <p>A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Home;
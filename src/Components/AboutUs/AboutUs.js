import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="container">
            <img src="https://image.freepik.com/free-vector/flat-colored-ambulance-composition-with-unfortunate-incident-description-patient-care-vector-illustration_1284-30686.jpg" alt="ambulance service" />

            <div className="my-5">
                <h1> About Us </h1>
            </div>
            <div className="d-lg-flex p-2 ">
                <div className="m-4">
                    <img className="rounded" src="https://as2.ftcdn.net/v2/jpg/02/51/33/29/500_F_251332952_5PZoBEOHumh5D8ifqXI7LyJpMRI6MoYH.jpg" alt="" />
                </div>
                <div className="m-4 res">
                    <h2> Our Mission </h2>
                    <p>At Modern Ambulance, we value loyalty, honesty, responsibility, and dependability. Our team thrives for performance, continuously striving for constant development and improvement. <br /> <br />
                        We believe in effective communication as a way to prevent errors, save time, and unnecessary spending. We strive to perform each task to the best of our abilities and provide practical service solutions with an experience that is not only efficient and professional but enjoyable.</p>
                </div>
            </div>
            <div className="d-lg-flex p-2 ">
                <div className="m-4">
                    <img className="rounded " src="https://image.freepik.com/free-vector/city-hospital-building_74855-6301.jpg" alt="" />
                </div>
                <div className="m-4 res">
                    <h2> OUR COMMITMENT </h2>
                    <p>At Ambulance USA, we are committed to listening to our customer’s needs and concerns. We believe in effective communication as a way to prevent errors, save time, and unnecessary spending. <br /> <br /> We strive to perform each task to the best of our abilities and provide practical service solutions with an experience that is not only efficient and professional but enjoyable.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;
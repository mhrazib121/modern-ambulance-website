import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();
    return (
        <div className="container">
            <div>
                <h1 className="text-center text-primary"> Service Details </h1>
                <h3>  {serviceId}</h3>
               

            </div>
        </div>
    );
};

export default Details;
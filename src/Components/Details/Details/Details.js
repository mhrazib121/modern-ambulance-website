import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceDetails} = useParams();
    console.log(serviceDetails)
    return (
        <div>
            <h2>This is booking: {} </h2>
            <p> descrip : {serviceDetails}</p>
        </div>
    );
};

export default Details;
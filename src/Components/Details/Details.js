import React from 'react';
import useProductDetails from '../../Hooks/useProductDetails';
import useService from '../../Hooks/useService';



const Details = () => {
    // const [services] = useService();
    // const detailshandle = services.forEach(service=>console.log(service.fee));
    const {details, detailshandle} = useProductDetails();
    console.log('details', details)
    console.log('details handle', detailshandle)
    
    return (
        <div>
            <h1>product details</h1>
            <h6> {detailshandle}</h6>
        </div>
    );
};

export default Details;
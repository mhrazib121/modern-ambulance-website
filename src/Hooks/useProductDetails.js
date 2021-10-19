import React, { useState } from 'react';
import useService from './useService';

const useProductDetails = () => {
    const [services] = useService();
    const [details, setDetails] = useState()
    
    const detailshandle =()=> {
        services.forEach(service=>setDetails(service));
    }
    
    return (
        details,
        detailshandle
    );
};

export default useProductDetails;
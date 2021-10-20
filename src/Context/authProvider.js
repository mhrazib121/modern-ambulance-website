import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useProductDetails from '../Hooks/useProductDetails';
import useService from '../Hooks/useService';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const allContext = useFirebase();
    const {services} =useService()
    // const {addToCard, selectedService, remove, setSelectedService} = useProductDetails();

    const data = {
        allContext,
        services
        // addToCard,
        // selectedService,
        // remove,
        // setSelectedService
    }
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
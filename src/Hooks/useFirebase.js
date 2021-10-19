import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/authentication.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [error, setError] = useState()

    const auth = getAuth();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user);
            setUser(user);
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const logOut = ()=>{
        signOut (auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    },[])
    
    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
};

export default useFirebase;
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/authentication.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    

    const auth = getAuth();
    const signInWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     const user = result.user
        //     console.log(user);
        //     setUser(user);
        // })
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

    const createNewUser = (event) => {
        event.preventDefault();
        if(password.length < 6){
            setError(" Password must be 6 characters")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('')
                console.log(user);
                setUserName();
            })
            .catch(error=>{
                setError(error.massage)
            })
            
    }
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const signInUsingEmail= () =>{
        signInWithEmailAndPassword (auth, email, password)
        .then(result=>{
            const user = result.user;
            setUser(user);
            console.log(user)
        })
    }
    const setUserName=()=>{
        updateProfile(auth.currentUser, {displayName: name})
        .then(result=>{})
    }
    
    return {
        user,
        error,
        signInWithGoogle,
        logOut,
        createNewUser,
        handleName,
        handleEmail,
        handlePassword,
        signInUsingEmail
    }
};

export default useFirebase;

import React from 'react';

import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, signInUsingEmail } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/home'
    console.log('come from', location.state?.from);

    const googleLogin = ()=>{
        signInWithGoogle()
        .then(result => {
            // const user = result.user
            // console.log(user);
            // setUser(user);
            history.push(redirect)
        })
    }
    return (

        <div className="d-flex ">

            <div>
                <img src="https://image.freepik.com/free-vector/ambulance-flat-design_23-2147945997.jpg" alt="" />
            </div>
            <div className="mx-auto mt-5 ">
                <h2> Please Login</h2>

                <br />
                <div className="input-effect" >
                    <input className=" m-2 px-4" type="email" placeholder="Enter your email" />
                    <br />
                    <input className="m-3 px-4" type="password" placeholder="Enter your password" />
                    <br />
                    <button className="m-2 bg-primary rounded-2" onClick={signInUsingEmail}>  Login </button>
                    <br />
                    <Link to="/register"> Want to register </Link>
                </div>
                <button className="m-2 bg-primary rounded-2" onClick={googleLogin}> google Login </button>
            </div>

        </div>

    );
};

export default Login;
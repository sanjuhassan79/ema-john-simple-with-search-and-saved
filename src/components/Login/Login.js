import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {

    const {signInUsingGoogle}=useAuth();
    const location=useLocation()
    const history=useHistory()
const redirect_uri=location.state?.from || '/Shop'

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then((result) => {
       
           history.push(redirect_uri)
            
           })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="Your Email" /> <br />
                    <input type="password" name="" placeholder="Your Email" />
                    <input type="submit" value="Submit" />

                </form>

                <p>new to ema-john? 
                    <Link to="/Register">Create Account</Link></p>
                    <div>-------or-------</div>


                    <button onClick={handleGoogleLogin} className="btn-regular">Google Sin In</button>
            </div>
        </div>
    );
};

export default Login;
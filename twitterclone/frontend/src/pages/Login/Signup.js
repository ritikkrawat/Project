import React, { useState } from 'react';
import twitterImage from '../../assets/images/twitter.jpeg';
import XIcon from '@mui/icons-material/X';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button';
import { Link , useNavigate} from 'react-router-dom';
import './Login.css'; 
import axios from 'axios';

const Signup = () => {
    const [username , setUsername] = useState('');
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (user || googleUser) {
        navigate('/')
        console.log(user)
        console.log(googleUser)
    }

    if (error) { 
        console.log(error.message);
    }

    if (loading) {
        console.log('loading....');
    }

    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);

        const user = {
            username: username,
            name: name,
            email: email,
        }

        axios.post(`http://localhost:5000/register`, user);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div className='login-container'>

            <div className='image-container'>
                <img className='image' src={twitterImage} alt=''/>
            </div>

            <div className='form-container'>
                <div className='form-box'>
                    <XIcon className='X'/>
                    <h2 className='heading'>Happening Now</h2>
                    <h3 className='heading1'>Join twitter today</h3>
                    <form onSubmit={handleSubmit}>

                        <input 
                            type='text'
                            className='display-name'
                            placeholder='@username'
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input 
                            type='text'
                            className='display-name'
                            placeholder='Enter full name'
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input 
                            type='email'
                            className='email'
                            placeholder='Email Address'
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input 
                            type='password'
                            className='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className='btn-signup'>
                            <button type='submit' className='btn'>Sign up</button>
                        </div>

                    </form>

                    <hr/>
                    <div className='google-button'>
                        <GoogleButton
                            className='g-btn'
                            type='light'
                            onClick={handleGoogleSignIn}
                        />
                    </div>

                    <div>
                        Already have an account?
                        <Link
                            to="/login"
                            style={{
                                textDecoration: 'none',
                                color: 'skyblue',
                                fontWeight: '600',
                                marginLeft: '5px'
                            }}
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

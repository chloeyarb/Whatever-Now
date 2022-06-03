import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props) {
    const [formState, setFormState] = useState({username:'', email:'', password:''});
    const [addUser] = useMutation(ADD_USER);

    // sign up form
    const handleFormSubmit = async (action) => {
        action.preventDefault();
        const mmutationResponse = await addUser({
            variables: {
                username: formState.username,
                email: formState.email, 
                password: formState.password
            }
        })
        const token = mmutationResponse.data.addUser.token;
        Auth.login(token);
    };
    // update state based on form input changes
    const handleUpdate = (action) => {
        const { name, value } = action.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div className=''>
            <Link to="/login">Login</Link>
            <h2> Sign-up </h2>
            <form onSubmit={handleFormSubmit}>
                <div className=''>
                    <label htmlFor="username"> Username:</label>
                    <input placeholder="Enter username" name="username" type="username" id="username" onChange={handleUpdate}/>
                </div>
                <div className=''>
                    <label htmlFor="email"> Email:</label>
                    <input placeholder="Your email" name="email" type="email" id="email" onChange={handleUpdate}/>
                </div>
                <div className=''>
                    <label htmlFor="password"> Password:</label>
                    <input placeholder="******" name="password" type="password" id="pw" onChange={handleUpdate}/>
                </div>
                <div className=''>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;
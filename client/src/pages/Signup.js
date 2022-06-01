import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props) {
    const [formState, setFormState] = useState({email:'', password:''});
    const [addUser] = useMutation(ADD_USER);

    // sign up form
    const handleFormSubmit = async (action) => {
        action.preventDefault();
        const mmutationResponse = await addUser({
            variables: {
                email: formState.email, 
                password: formState.password,
                username: formState.username
            }
        })
        const token = mmutationResponse.data.addUser.token;
        Auth.login(token);
    };
    // update state based on form input changes
    const handleUpdate = (action) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };
}

export default Signup;
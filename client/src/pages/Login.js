import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Login (props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN);

    // update state based on form input changes
    const handleUpdate = (action) => {
        const { name, value } = action.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    };

    // submit form
    const handleFormSubmit = async (action) => {
        action.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password},
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (error) {
            console.log(error)
        }
    };
}


import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({username:'', email:'', password:''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [addUser] = useMutation(ADD_USER);

    const handleUpdate = (action) => {
        const { name, value } = action.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    // sign up form
    const handleFormSubmit = async (action) => {
        action.preventDefault();

        const form = action.currentTarget;
        if (form.checkValidity() === false) {
            action.preventDefault();
            action.stopPropagation();
          }
        try {
            const { data } = await addUser({
                variables: {...formState}
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
            setShowAlert(true);
        } 

        setFormState({
            username: '',
            email:'',
            password: ''
        });
    };
    
  
    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Invalid signup, please try again. 
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor='username'>Username:</Form.Label>
                    <Form.Control type='text' placeholder='Enter username' name='username' onChange={handleUpdate} value={formState.username} required />
                    <Form.Control.Feedback type='invalid'>Username needed</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Control type='email' placeholder='Enter email address' name='email' onChange={handleUpdate} value={formState.email} required />
                    <Form.Control.Feedback type='invalid'> Email needed</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='password'>Password:</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' name='password' onChange={handleUpdate} value={formState.password} required />
                    <Form.Control.Feedback type='invalid'> Password needed</Form.Control.Feedback>
                </Form.Group>

                <Button disabled={!(formState.username && formState.email && formState.password)} type='submit' variant='success'>Submit</Button>
            </Form>
        </>
    )
}

export default Signup;



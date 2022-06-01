import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login (props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN);

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
    // update state based on form input changes
    const handleUpdate = (action) => {
        const { name, value } = action.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    };


    return (
      <div>
          <Link to="/signup">Signup</Link>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
              <div className=''>
                  <label htmlFor="email">Email:</label>
                  <input placeholder="Your email" name="email" type="email" id="email" onChange={handleUpdate}/>
              </div>
              <div className=''>
                  <label htmlFor="pwd">Password:</label>
                  <input placeholder="******" name="pw" type="pw" id="pw" onChange={handleUpdate} /> 
              </div>
              {error ? (
                  <div>
                      <p> Login Failed </p>
                  </div>
              ) : null}
              <div className=''>
                  <button type="submit">Submit</button>
              </div>
          </form>
      </div>
    )
}

export default Login;
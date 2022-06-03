import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleUpdate = (action) => {
      const { name, value } = action.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

  // submit form
  const handleFormSubmit = async (action) => {
    action.preventDefault();

    const form = action.currentTarget;
    if (form.checkValidity() === false) {
      action.preventDefault();
      action.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: {...formState}
      });
      Auth.login(data.login.token);

    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setFormState({
      username: '',
      password: ''
    });
  };


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="usermane">Username:</label>
          <input
            placeholder="Your username"
            name="username"
            type="username"
            id="username"
            onChange={handleUpdate}
          />
        </div>
        <div className="">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pw"
            onChange={handleUpdate}
          />
        </div>
        {error ? (
          <div>
            <p> Login Failed </p>
          </div>
        ) : null}
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

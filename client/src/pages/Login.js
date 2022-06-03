import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

function Login(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // submit form
  const handleFormSubmit = async (action) => {
    action.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };
  // update state based on form input changes
  const handleUpdate = (action) => {
    const { name, value } = action.target;
    setFormState({
      ...formState,
      [name]: value,
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

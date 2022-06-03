import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-4 w-50" controlId="formGroupUsername">
          <Form.Label htmlFor="usermane">Username:</Form.Label>
          <Form.Control
            placeholder="Your username"
            name="username"
            type="username"
            id="username"
            onChange={handleUpdate}
          />{" "}
        </Form.Group>
        <div className="">
          <Form.Label htmlFor="pwd">Password:</Form.Label>
          <Form.Control
            placeholder="******"
            name="pw"
            type="pw"
            id="pw"
            onChange={handleUpdate}
          />
        </div>
        {error ? (
          <div>
            <p>Login Failed </p>
          </div>
        ) : null}
        <div className="">
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;

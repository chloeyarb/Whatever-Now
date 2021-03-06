import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  useEffect(() => {
    document.title = "Login";
  });

  // update state based on form input changes
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h1 className="opacity-50 mb-3 text-light">
          Log<span className="fw-light">in</span>...
        </h1>
      </div>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="warning"
        >
          Invalid login, please try again.
        </Alert>

        <Form.Group className="mb-4 w-50">
          <Form.Label htmlFor="username" className="text-muted fs-4 mb-2">
            Username:
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleUpdate}
            value={formState.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username needed
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4 w-50">
          <Form.Label htmlFor="password" className="text-muted fs-4 mb-2">
            Password:
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleUpdate}
            value={formState.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            {" "}
            Password needed
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={!(formState.username && formState.password)}
          type="submit"
          variant="warning"
          className="w-25 fs-5 fw-bold mt-5 mb-5 "
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;

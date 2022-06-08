import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  useEffect(() => {
    document.title = 'Sign Up'
  });

  const handleUpdate = (action) => {
    const { name, value } = action.target;
    setFormState({
      ...formState,
      [name]: value,
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
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h1 className="opacity-50 text-light">
          Sign <span className="fw-light">up</span>...
        </h1>
      </div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
        className="mt-3"
      >
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="warning"
        >
          Invalid signup, please try again.
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
          <Form.Label htmlFor="email" className="text-muted fs-4 mb-2">
            Email:
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            name="email"
            onChange={handleUpdate}
            value={formState.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            {" "}
            Email needed
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
          disabled={
            !(formState.username && formState.email && formState.password)
          }
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

export default Signup;

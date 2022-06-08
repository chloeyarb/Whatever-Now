import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { EDIT_USER } from "../utils/mutations";
import { Form, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";


const Account = () => {
  const [userState, setUserState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [errAlert, setErrAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const [editUser, { error }] = useMutation(EDIT_USER);

  const userUpdate = (e) => {
    setUserState(e.target.value);
  };

  const passwordUpdate = (e) => {
    setPasswordState(e.target.value);
  };

  const emailUpdate = (e) => {
    setEmailState(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await editUser({
        variables: {
          newName: userState,
          newPassword: passwordState,
          newEmail: emailState,
        },
        onCompleted: () => {
          setSuccessAlert(true);
          setErrAlert(false);
        },
        onError: () => {
          setSuccessAlert(false);
          setErrAlert(true);
        },
      });
      setUserState("");
      setPasswordState("");
      setEmailState("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h1 className="opacity-25 text-light">
          Account <span className="fw-light">Settings</span>...
        </h1>
      </div>
      <Form onSubmit={handleFormSubmit} className="mt-5">
        <Alert
          dismissible
          onClose={() => setSuccessAlert(false)}
          show={successAlert}
          variant="warning"
        >
          Your information has been updated!
        </Alert>
        <Alert
          dismissible
          onClose={() => setErrAlert(false)}
          show={errAlert}
          variant="warning"
        >
          {error && error.graphQLErrors[0].message}
        </Alert>
        <Form.Group className="mb-4 w-50">
          <Form.Label htmlFor="username" className="text-muted fs-4 mb-2">
            Username:
          </Form.Label>
          <Form.Control
            onChange={userUpdate}
            type="text"
            name="username"
            placeholder="Change Username"
            value={userState}
          />
        </Form.Group>

        <Form.Group className="mb-4 w-50">
          <Form.Label htmlFor="email" className="text-muted fs-4 mb-2">
            Email:
          </Form.Label>
          <Form.Control
            onChange={emailUpdate}
            type="text"
            name="email"
            placeholder="Change Email"
            value={emailState}
          />
        </Form.Group>

        <Form.Group className="mb-4 w-50">
          <Form.Label htmlFor="password" className="text-muted fs-4 mb-2">
            Password:
          </Form.Label>
          <Form.Control
            onChange={passwordUpdate}
            type="text"
            name="password"
            placeholder="Change Password"
            value={passwordState}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="warning"
          className="w-25 fs-5 fw-bold mt-5 mb-5 "
        >
          Submit Changes
        </Button>
      </Form>
    </div>
  );
};

export default Account;

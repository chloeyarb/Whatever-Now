import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { EDIT_USER } from "../utils/mutations";

// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
import { Card, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
// import { Accordion, useAccordionButton } from "react-bootstrap";

// import Stack from 'react-bootstrap/Stack'

// function CustomToggle({ children, eventKey }) {
//   const decoratedOnClick = useAccordionButton(eventKey, () =>
//     console.log('totally custom!'),
//   );

//   return (
//     <button
//       type="button"
//       variant="warning"
//       className="fw-bold fs-4 bg-warning"
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

const Account = () => {
  const [userState, setUserState] =  useState("")
  const [passwordState, setPasswordState] = useState("")
  const [emailState, setEmailState] = useState("") 

  const [editUser, {error} ] = useMutation(EDIT_USER)

  const userUpdate = (action) => {
    setUserState(action.target.value)
  }

  const handleFormSubmit = async (action) => {
    action.preventDefault();
    console.log(userState);

    try {
      await editUser({
        variables: {newName: userState, newPassword: passwordState, newEmail: emailState}
      })
      setUserState("");

    } catch (e) {
      console.error(e)
    }
    console.log(error)
  } 

  
  return (
    <div className="container mt-5 mb-5">
    <div className="row">
      <h1 className="opacity-25 text-light">
        Account <span className="fw-light">Settings</span>...
      </h1>
    </div>
    <Form onSubmit={handleFormSubmit} className="mt-5">
      <Form.Group className="mb-4 w-50">
      <Form.Label htmlFor="username" className="text-muted fs-4 mb-2">
        Username:
      </Form.Label>
      <Form.Control onChange={userUpdate} type='text' name='username' placeholder="Change Username" />
      </Form.Group>

      <Form.Group className="mb-4 w-50">
      <Form.Label htmlFor="email" className="text-muted fs-4 mb-2">
        Email:
      </Form.Label>
      <Form.Control type='text' name='email' placeholder="Change Email" />
      </Form.Group>

      <Form.Group className="mb-4 w-50">
      <Form.Label htmlFor="password" className="text-muted fs-4 mb-2">
        Password:
      </Form.Label>
      <Form.Control type='text' name='password' placeholder="Change Password" />
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

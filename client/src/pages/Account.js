import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// need to render the page with and acoounts settings with change PFP, change password, and add birthday
const Account = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h1 className="opacity-25 mb-3 text-light">
          Account <span className="fw-light">Settings</span>...
        </h1>
      </div>

      <Form className="mt-5">
        <Form.Group className="mb-4 w-50" controlId="formGroupUsername">
          <Form.Label htmlFor="inputUsername1" className="text-muted fs-4 mb-2">
            Update username
          </Form.Label>
          <Form.Control type="username" placeholder="New username..." />
        </Form.Group>

        <Form.Group className="mb-4 w-50" controlId="formGroupEmail">
          <Form.Label htmlFor="inputEmail1" className="text-muted fs-4 mb-2">
            Update email
          </Form.Label>
          <Form.Control type="email" placeholder="New email..." />
        </Form.Group>

        <Form.Group className="mb-4 w-50" controlId="formGroupPassword">
          <Form.Label htmlFor="inputPassword1" className="text-muted fs-4 mb-2">
            Update password
          </Form.Label>
          <Form.Control type="password" placeholder="New password..." />
        </Form.Group>

        <Form.Group className="mb-4 w-25" controlId="formGroupPhoto">
          <Form.Label htmlFor="inputPhoto1" className="text-muted fs-4 mb-2">
            Update account photo
          </Form.Label>
          <Form.Control type="photo" placeholder="PDF..." />
        </Form.Group>
        <Button
          variant="warning"
          type="submit"
          className="w-25 fs-5 fw-bold mt-5 mb-5 "
        >
          Update My Account
        </Button>
      </Form>
    </div>
  );
};

export default Account;

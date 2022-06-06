import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'



// need to render the page with and acoounts settings with change PFP, change password, and add birthday
const Account = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h1 className="opacity-25 mb-3 text-light">
          Account <span className="fw-light">Settings</span>
        </h1>
      </div>
      <>
        <div className="row">
          <h1 className="opacity-25 mb-3 text-light">
            Change You're Settings
          </h1>
          <ButtonGroup vertical>
            <Button>Change</Button>
          </ButtonGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Change You're Username"
              aria-label="Username"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="dark">
              Submit
            </Button>

          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Change You're Email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="dark">
              Submit
            </Button>

          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Change You're Password"
              aria-label="Password"
              aria-describedby="basic-addon2"
            />
            <Button
              variant="dark">
              Submit
            </Button>

          </InputGroup>
        </div>
      </>
      <div className="row">
        <h1 className="opacity-25 mb-3 text-light">
          Change You're Settings
        </h1>
        <ButtonGroup vertical>
          <Button>Button</Button>
        </ButtonGroup>
      </div>
      <div className="row">
        <h1 className="opacity-25 mb-3 text-light">
          Change You're Settings
        </h1>
        <ButtonGroup vertical>
          <Button>Button</Button>
        </ButtonGroup>
      </div>

    </div >
  );
};

export default Account;

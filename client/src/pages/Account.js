import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Accordion, useAccordionButton } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Account() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">
            Change Your Settings
            </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <>
              <InputGroup className="mb-3">
                <FormControl
                  size="lg"
                  placeholder="Change You're Username"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                />

              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  size="lg"
                  placeholder="Change You're Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">@Email.com</InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl
                  size="lg"
                  placeholder="Change You're Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <Button>
                Submit
              </Button>
            </>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Update Your Birthday</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>

          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );

  // need to render the page with and acoounts settings with change PFP, change password, and add birthday
};

export default Account;

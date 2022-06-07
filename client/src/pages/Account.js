import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Accordion, useAccordionButton } from "react-bootstrap";

import Stack from 'react-bootstrap/Stack'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      variant="warning"
      className="fw-bold fs-4 bg-warning"
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
          <Card.Body className="mb-3" >
            <>
              <InputGroup className="mb-5">
                <FormControl
                  size="lg"
                  placeholder="Change You're Username"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                />

              </InputGroup>
              <InputGroup className="mb-5">
                <FormControl
                  size="lg"
                  placeholder="Change You're Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">@Email.com</InputGroup.Text>
              </InputGroup>
              <InputGroup className="mb-5">
                <FormControl
                  size="lg"
                  placeholder="Change You're Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="warning fw-bold fs-4">Save changes</Button>
                <Button variant="outline-warningfw-bold fs-4">Cancel</Button>
              </Stack>
            </>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Account;

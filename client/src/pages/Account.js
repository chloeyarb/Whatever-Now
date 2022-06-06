import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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

function MyCalendar() {
 
  const [date, setDate] = useState(new Date());
 
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  }
 
  return (
      <Calendar
          onChange={onDateChange}
          value={date}
          showNeighboringMonth={false}
          locale={"en-US"}
        />
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
          <CustomToggle eventKey="1">Add a Birthday</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <MyCalendar></MyCalendar>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );

  // need to render the page with and acoounts settings with change PFP, change password, and add birthday
};

export default Account;

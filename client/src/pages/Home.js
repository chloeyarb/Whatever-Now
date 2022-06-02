import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Container, ThemeProvider } from "react-bootstrap";
const Home = () => {
  return (
    <Container fluid="md">
      <Card className="bg-dark text-white">
        <Card.Img src="/img/HI.png" alt="Card image" className="food" />
        <Card.ImgOverlay>
          {/* STYLE WELCOME MESSAGE + ADD BUTTONS */}
          <Card.Text className="hero-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h1 className="opacity-25 mb-3 text-light">
              What<span className="fw-light">ever</span>...
            </h1>
          </div>
        </div>

        <Form>
          <Form.Group className="mb-3 w-50" controlId="formGroupPost">
            <Form.Control
              type="post"
              placeholder="Whatever you want to say..."
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50" controlId="formGroupPhoto">
            <Form.Control type="photo" placeholder="PDF" />
          </Form.Group>

          <Button
            variant="warning"
            type="submit"
            className="w-25 fs-5 fw-bold mt-3 mb-5 "
          >
            Publish Post
          </Button>
        </Form>

        <>
          {/* Card with image top, text bottom */}
          <Card className="mb-3 w-75 ">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark" type="submit" className="">
                Like
              </Button>
            </Card.Body>
          </Card>
          <br />
          {/* Card with text top, image bottom */}
          {/* <Card className="mb-3 w-75">
            <Card.Body>
              <Button variant="dark" type="submit" className="">
                Like
              </Button>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
          </Card> */}
        </>
      </div>
    </Container>
  );
};

export default Home;

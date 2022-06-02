import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Container, } from "react-bootstrap";
const Home = () => {
    return (
        <Container fluid="md">
            <div className="hero-img">
                <Card>
                    <Card.Img src="/img/HI.png" alt="Card image" />
                    <Card.ImgOverlay>
                        {/* STYLE WELCOME MESSAGE + ADD BUTTONS */}
                        <Card.Text className="hero-text">
                            Welcome to WhateverNow
                        </Card.Text>

                    </Card.ImgOverlay>
                </Card>
            </div>
            {/* <Row className="justify-content-md-center">
        <Col md="auto">
          Welcome to Whatever Now
          <div>
            <img
              src="/img/HI.png"
              className="img-fluid"
              style={{ maxWidth: "80rem" }}
              alt="heropic"
            />
          </div>
          {/* <div>Are mission statement being that Media its-self has a week self- life at best, with that being because of the overabundance of news or that People’s attention span is not that long. So why not have a social media Page that reflex that. With our app “What-3ver Now” that is our goal to achieve. With a little thing where every post and convo for that week is burned after. The week starts Sunday at 12est and ends Sunday 12est. Not ever post will last a week full week. Now it might see like we are going after a “Free-Speech” app as many others have done with their disdain for how Twitter or others have there Policys for posting content, but I assure you here we do intend to “watch posts” to see if any nefarious or malicious posts or comments are poste
            </div> */}
            {/* <div className="mb-2">
            <Button variant="primary" size="lg">
              Login
            </Button>{" "}
            <Button variant="primary" size="lg">
              Sign Up
            </Button>
          </div>
        </Col>
      </Row> */}

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <h1 className="opacity-25 mb-3">
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
                        variant="dark"
                        type="submit"
                        className="w-25 fs-5 fw-bold mt-3 mb-5 button-color"
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
                    <Card className="mb-3 w-75">
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
                    </Card>
                </>
            </div>
        </Container>
    );
};

export default Home;

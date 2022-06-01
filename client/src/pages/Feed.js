import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Feed = () => {
  return (
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
          <Form.Control type="post" placeholder="Whatever you want to say..." />
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark" type="submit" className="">
              Like
            </Button>
            <Button variant="light" type="submit" className="">
              React
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
      </>
    </div>
  );
};

export default Feed;

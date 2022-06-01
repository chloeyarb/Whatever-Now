import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Feed = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h1 className="opacity-25 mb-3">Whatever...</h1>
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
          className="w-25 fs-5 fw-bold mt-3 button-color"
        >
          Publish Post
        </Button>
      </Form>
    </div>
  );
};

export default Feed;

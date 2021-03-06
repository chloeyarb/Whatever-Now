import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { NavLink } from "react-router-dom";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries";
import { ADD_POST, ADD_LIKE } from "../utils/mutations";
import auth from "../utils/auth";

import { Container, Col, Row } from "react-bootstrap";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

const Home = () => {
  const uploader = new Uploader({ apiKey: process.env.REACT_APP_UPLOADER_KEY });
  const options = {
    styles: {
      colors: {
        primary: "#ffc107",
      },
    },
  };

  const [imgUrl, setImgUrl] = useState("");
  const [postText, setPostText] = useState("");
  const [uploadBtn, setUploadBtn] = useState(true);

  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);

  const loggedIn = auth.LoggedIn();

  const [addPost, { error }] = useMutation(ADD_POST, {
    refetchQueries: [{ query: QUERY_POSTS }, "posts"],
  });

  const [likePost] = useMutation(ADD_LIKE);

  useEffect(() => {
    if (loggedIn) {
      document.title = "Feed";
    } else {
      document.title = "WhateverNow";
    }
  });

  const handleChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageUpload = (files) => {
    setImgUrl(files[0].fileUrl);
    setUploadBtn(false);
  };

  const handlePostLike = async (postId, e) => {
    e.preventDefault();

    try {
      await likePost({
        variables: { postId },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      await addPost({
        variables: { postText, imgUrl },
      });

      setPostText("");
      setImgUrl("");
      setUploadBtn(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid="md" className="mt-4">
      {!loggedIn ? (
        <>
          <div id="parent">
            <div id="heroimg">
              <h1 className="hText"> Welcome to WhateverNow!</h1>

              <div>
                <Button
                  as={NavLink}
                  to="/signup"
                  variant="warning"
                  type="submit"
                  className="fw-bold fs-4 "
                  size="sm"
                >
                  Signup
                </Button>
              </div>
            </div>
          </div>

          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2 className="opacity-50 fs-1 about text-white d-flex justify-content-center">
                What is Whatever<span className="fw-light">Now</span>?
              </h2>

              <p className="text-white opacity-50 about-text d-flex justify-content-center">
                Media itself has a weak shelf-life due to the overabundance of
                news and the average person???s attention span is not very long.
                So why not have a platform that understands this? WhateverNow
                does! Here you can post about Whatever is in the Now and and
                after the week is through it will vanish. WhateverNow
                understands that some may take advantage of this vanish feature,
                so we will be sure to remove any nefarious or malicious posts
                that might be published here.
              </p>
            </Col>
          </Row>
        </>
      ) : (
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h1 className="opacity-25 mb-3 text-white">
                What<span className="fw-light">ever</span>...
              </h1>
            </div>
          </div>

          <Form onSubmit={handlePostSubmit}>
            <Form.Group className="mb-3 w-75" controlId="formGroupPost">
              <Form.Control
                type="text"
                placeholder="Whatever you want to say..."
                value={postText}
                onChange={handleChange}
                className="postTextArea "
              />
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="formGroupPhoto">
              {uploadBtn && (
                <UploadButton
                  uploader={uploader}
                  options={options}
                  onComplete={handleImageUpload}
                >
                  {({ onClick }) => (
                    <Button
                      variant="warning"
                      type="submit"
                      className="fw-bold mt-3  button-color"
                      id="upLoadBtn"
                      onClick={onClick}
                    >
                      Upload Picture
                    </Button>
                  )}
                </UploadButton>
              )}
            </Form.Group>

            <Button
              variant="outline-warning"
              type="submit"
              id="publishBtn"
              className=" fw-bold  mb-5 button-color"
            >
              Publish Post
            </Button>
            {error && (
              <span className="ms-4 fs-2 text-white opacity-75">
                Something went wrong!
              </span>
            )}
          </Form>

          <>
            {loading && <div>loading....</div>}

            {posts.map((post) => (
              <Card className="mb-5 w-50 " key={post._id}>
                {post.imgUrl && <Card.Img variant="top" src={post.imgUrl} />}

                <Card.Body>
                  <Card.Text>{post.postText}</Card.Text>
                  <Button
                    variant="warning"
                    type="button"
                    onClick={(e) => handlePostLike(post._id, e)}
                  >
                    {post.likeCount} <BsFillEmojiSunglassesFill />
                  </Button>
                </Card.Body>
              </Card>
            ))}

            <br />
          </>
        </div>
      )}
    </Container>
  );
};

export default Home;

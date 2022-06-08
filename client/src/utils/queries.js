import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      username
      postText
      createdAt
      likes
      likeCount
      imgUrl
      comments {
        _id
        username
        commentBody
        createdAt
      }
    }
  }
`;
// should we use ID instead of username?
export const QUERY_POST = gql`
  query post($username: String!) {
    post(username: $username) {
      _id
      username
      postText
      createdAt
      likes
      likeCount
      imgUrl
      comments {
        _id
        username
        commentBody
        createdAt
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
        likeCount
      }
      likedPosts
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      likedPosts
      posts {
        _id
        postText
        createdAt
        likes
        likeCount
        comments {
          _id
          username
          commentBody
          createdAt
        }
      }
    }
  }
`;

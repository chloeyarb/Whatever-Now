import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!, $imgUrl: String) {
    addPost(postText: $postText, imgUrl: $imgUrl) {
      _id
      username
      postText
      createdAt
      imgUrl
      likes
      likeCount
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentBody: String!, $postId: ID!) {
    addComment(commentBody: $commentBody, postId: $postId) {
      _id
      comments {
        _id
        username
        commentBody
        createdAt
      }
    }
  }
`;

export const ADD_LIKE = gql`
  mutation like($postId: ID!) {
    like(postId: $postId) {
      _id
      username
      postText
      createdAt
      imgUrl
      likes
      likeCount
      comments {
        _id
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser($newName: String, $newPassword: String, $newEmail: String) {
    editUser(
      newName: $newName
      newPassword: $newPassword
      newEmail: $newEmail
    ) {
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

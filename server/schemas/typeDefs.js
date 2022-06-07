const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
    likedPosts: [ID]
}
type Post {
    _id: ID
    username: String
    postText: String
    createdAt: String
    imgUrl: String
    likes: [ID]
    likeCount: Int
    comments: [Comment]
}

type Comment {
    _id: ID
    username: String
    commentBody: String
    createdAt: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    posts(username: String): [Post]
    user(username: String!): User
    post(username: String!): Post
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, imgUrl: String): Post
    addComment(commentBody: String!, postId: ID!): Post
    like(postId: ID!): Post
    login(username: String!, password: String!): Auth
}
`

module.exports = typeDefs;
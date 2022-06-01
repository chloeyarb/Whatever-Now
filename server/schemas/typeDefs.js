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
    likes: [ID]
    likeCount: Int
}

type Query {
    users: [User]
    posts(username: String): [Post]
    user(username: String!): User
    post(username: String!): Post
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addPost(postText: String!, userId: ID!, username: String!): Post
    like(postId: ID!, userId: ID!): Post
}
`

module.exports = typeDefs;
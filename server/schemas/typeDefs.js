const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
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
    posts: [Post]
    user(username: String): User
    post(username: String): Post
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addPost(postText: String!): Post
}
`

module.exports = typeDefs;
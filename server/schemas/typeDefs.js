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
    me: User
    users: [User]
    posts(username: String): [Post]
    user(username: String!): User
    post(username: String!): Post
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    like(postId: ID!): Post
    login(username: String!, password: String!): Auth 
}
`

module.exports = typeDefs;
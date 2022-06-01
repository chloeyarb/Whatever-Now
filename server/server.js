const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./config/connection');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();

    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Live at http://localhost:${PORT}`)
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
        })
    });
    
};

startApolloServer(typeDefs, resolvers);

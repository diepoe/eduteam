const express  = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');

const { Session } = require('./models');
  
const typeDefs = gql`
    type Session {
        id: ID!
        code: String!
  description: String!
    }
    type Query {
        getSessions: [Session!]
    }
    type Mutation {
        addSession(code: String!, description: String!): Session
    }
`;

const resolvers = {
    Query: {
        getSessions: async () => await Session.find({}).exec()
    },
    Mutation: {
        addSession: async (_, args) => {
            try {
                let response = await Session.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
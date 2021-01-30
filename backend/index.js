const express  = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');

const { Contribution, Session } = require('./models');
  
const typeDefs = gql`
    type Contribution {
        author: String!
        content: String!
        sessionID: String! 
    }

    type Session {
        id: ID!
        code: String!
  description: String!
  contributions: [Contribution!]!
    }

    type Query {
        getSessions: [Session!]
        getContributions(sessionID: String!): [Contribution!]
    }

    type Mutation {
        addSession(code: String!, description: String!): Session
        addContribution(author: String!, content: String!, sessionID: String): Contribution
    }
`;

const resolvers = {
    Query: {
        getSessions: async () => await Session.find({}).exec(),
        getContributions: async () => await Contribution.find({}).exec()
    },
    Mutation: {
        addSession: async (_, args) => {
            try {
                let response = await Session.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        },
        addContribution: async (_, args) => {
            try {
                let response = await Contribution.create(args);
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
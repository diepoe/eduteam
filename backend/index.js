const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { Text, Password } = require("@keystonejs/fields");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");

require("dotenv").config();

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const PROJECT_NAME = "backend";
const adapterConfig = {
  mongoUri: process.env.DB_URI || "mongodb://localhost/backend",
};

const ContributionSchema = require("./lists/Contribution");
const SessionSchema = require("./lists/Session");

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList("Contribution", ContributionSchema);

keystone.createList("Session", SessionSchema);

keystone.createList("User", {
  fields: {
    username: { type: Text },
    password: { type: Password },
  },
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: {
    identityField: "username",
    secretField: "password",
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};

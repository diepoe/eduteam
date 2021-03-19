const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { Text, Password } = require("@keystonejs/fields");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const PROJECT_NAME = "backend";
const adapterConfig = { mongoUri: "mongodb://localhost/backend" };

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
    identityField: "username", // default: 'email'
    secretField: "password", // default: 'password'
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

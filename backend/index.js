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
  cookie: {
    secure: process.env.NODE_ENV === "production",
  },
  cookieSecret: process.env.COOKIE_SECRET || "very-secret",
});

keystone.createList("Contribution", ContributionSchema);

keystone.createList("Session", SessionSchema);

keystone.createList("User", {
  access: {
    read: ({ authentication: { item } }) => {
      return {
        state_not: "deactivated",
      };
    },
  },
  fields: {
    username: { type: Text },
    password: {
      type: Password,
      access: {
        // 3. Only admins can see if a password is set. No-one can read their own or other user's passwords.
        read: ({ authentication }) => authentication.item.isAdmin,
        // 4. Only authenticated users can update their own password. Admins can update anyone's password.
        update: ({ existingItem, authentication: { item } }) => {
          return item.isAdmin || existingItem.id === item.id;
        },
      },
    },
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

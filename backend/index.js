const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'backend';
const adapterConfig = { mongoUri: 'mongodb://localhost/backend' };

const ContributionSchema = require('./lists/Contribution')
const SessionSchema = require('./lists/Session')

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList('Session', SessionSchema);

keystone.createList('Contribution', ContributionSchema)

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true }),
  ],
};

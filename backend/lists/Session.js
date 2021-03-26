const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  schemaDoc: "A list of sessions that can be joined to",
  fields: {
    title: {
      type: Text,
      adminDoc: "This is the title of a session",
      isRequired: true,
    },
    description: {
      type: Text,
      adminDoc: "This is a description of the session",
      isRequired: true,
    },
    contributionList: {
      type: Relationship,
      ref: "Contribution",
      many: true,
      adminDoc: "These are the contributions of the session",
    },
    code: {
      type: Text,
      isRequired: true,
      isUnique: true,
      adminDoc: "Code of the session",
    },
  },
};

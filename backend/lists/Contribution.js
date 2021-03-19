const { Markdown } = require("@keystonejs/fields-markdown");
const { Text, Relationship } = require("@keystonejs/fields");

module.exports = {
  fields: {
    author: {
      type: Text,
      isRequired: true,
    },
    content: {
      type: Markdown,
    },
    session: {
      type: Relationship,
      ref: "Session",
      many: false,
      isRequired: true,
    },
  },
};

const { Markdown } = require('@keystonejs/fields-markdown');
const {Text} = require('@keystonejs/fields');

module.exports = {
  fields: {
    author: {
      type: Text,
      isRequired: true,
    },
    content: {
     type: Markdown 
    },
    session: {
      type: Text,
      isRequired: true,
    }
  },
};
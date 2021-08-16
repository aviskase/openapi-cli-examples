//@ts-check
const AddEnumToDescription = require('./preprocessors/add-enum-to-description');
const id = 'custom-preprocessors';

/** @type { import('@redocly/openapi-core/src/config/config').PreprocessorsConfig } */
const preprocessors = {
  oas3: {
    'add-x-enum-to-description': AddEnumToDescription,
  },
};

module.exports = {
  id,
  preprocessors,
};

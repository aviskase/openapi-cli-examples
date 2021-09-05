//@ts-check
const UppercaseSchemaEnums = require('./rules/uppercase-schema-enums');
const id = 'custom-rules';

/** @type { import('@redocly/openapi-core/src/config/config').CustomRulesConfig } */
const rules = {
  oas3: {
    'uppercase-schema-enums': UppercaseSchemaEnums,
  },
};

module.exports = {
  id,
  rules,
};

//@ts-check
const UppercaseSchemaEnums = require('./rules/uppercase-schema-enums');
const DescriptionStyle = require('./rules/description-style');
const id = 'custom-rules';

/** @type { import('@redocly/openapi-core/src/config/config').CustomRulesConfig } */
const rules = {
  oas3: {
    'uppercase-schema-enums': UppercaseSchemaEnums,
    'description-style': DescriptionStyle,
  },
};

module.exports = {
  id,
  rules,
};

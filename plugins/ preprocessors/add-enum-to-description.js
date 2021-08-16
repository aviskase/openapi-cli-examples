//@ts-check
module.exports = AddEnumToDescription;

/** @type { import('@redocly/openapi-core/src/visitors').Oas3Preprocessor } */
function AddEnumToDescription(options) {
  const vendorExtension = options.vendorExtension || 'x-enum';
  return {
    Schema(schema) {
      if (schema[vendorExtension]) {
        schema.description = appendToDescription(schema[vendorExtension], schema.description);
      }
    },
  };
}

function appendToDescription(values, description) {
  let additionalDescription = `Possible values: ${values.map(v => `\`${v}\``).join(', ')}`;
  if (description) {
    return `${description}\n\n${additionalDescription}`;
  }
  return additionalDescription;
}

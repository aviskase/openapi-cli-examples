//@ts-check
module.exports = UppercaseSchemaEnums;

/** @type { import('@redocly/openapi-core/src/visitors').Oas3Rule } */
function UppercaseSchemaEnums(options) {
  const enumProperties = ['enum', ...(options.enumLikeProperties || [])];
  
  return {
    Schema: {
      skip(node) {
        return node.type !== 'string';
      },
      enter(node, { report, location }) {
        for (const prop of enumProperties) {
          if (node[prop] !== undefined) {
            if (node[prop].some(s => s !== s.toUpperCase())) {
              return report({ message: `All enum values should be uppercase`, location: location.child(prop) });
            }
          }
        }
      }
    }
  };  
}
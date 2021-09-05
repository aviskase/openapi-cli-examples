//@ts-check
module.exports = DescriptionStyle;

/** @type { import('@redocly/openapi-core/src/visitors').Oas3Rule } */
function DescriptionStyle() {
  return {
    Info: checkStyle(),
    Server: checkStyle(), 
    ServerVariable: checkStyle(),
    PathItem: checkStyle(),
    Operation: checkStyle(), 
    ExternalDocs: checkStyle(),
    Parameter: checkStyle(),
    RequestBody: checkStyle(),
    Response: checkStyle(),
    Example: checkStyle(),
    Header: checkStyle(),
    Tag: checkStyle(),
    Schema: checkStyle(),
    SecurityScheme: checkStyle(),
  };  
}

function checkStyle(attribute = 'description') {
  return {
    skip(node) {
      return typeof node[attribute] !== 'string';
    },
    enter(node, { report, location, type }) {
      const loc = location.child([attribute]);

      const content = node[attribute].trim();
      if (content.length === 0){
        report({message: `The ${type.name} description should not be empty string.`, location: loc});
      }

      const firstChar = content.slice(0,1);
      if (firstChar !== firstChar.toLocaleUpperCase()){
        report({message: `The ${type.name} description should start with capital letter.`, location: loc});
      }

      const lastChar = content.slice(-1);
      if (!(['.', '!'].includes(lastChar))) {
        const suggest = `"<...>${content.slice(-10)}."`;
        report({message: `The ${type.name} description should end with punctuation.`, location:loc, suggest: [suggest]});
      }
    }
  };
}
const yaml = require('js-yaml');
const fs = require('fs');

// Get document, or throw exception on error
try {
  const redocly = yaml.load(fs.readFileSync('.redocly.yaml', 'utf8'));
  const docsConfig = redocly.referenceDocs;
  fs.writeFileSync('.redoc.json', JSON.stringify(docsConfig, null, 2));
}
catch (e) {
  console.log(e);
}

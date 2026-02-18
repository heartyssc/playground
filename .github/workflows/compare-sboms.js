const fs = require('fs');
const { diffJson } = require('json-diff');

const currentSBOM = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const previousSBOM = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

const diff = diffJson(previousSBOM, currentSBOM);
const result = diff.length > 0 ? diff : 'No changes detected in SBOM.';

console.log(result);

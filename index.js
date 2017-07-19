const validate = require('sourcemap-validator');
const { readFileSync } = require('fs');


validate(readFileSync('./script-compiled.js', 'utf8'), readFileSync('./script-compiled.js.map', 'utf8'));

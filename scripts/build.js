const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const output = path.join(root, 'dist');
const filter = (source) => !path.basename(source).startsWith('.');

fs.rmSync(output, { recursive: true, force: true });
fs.cpSync(path.join(root, 'public'), output, { recursive: true, filter });
fs.cpSync(path.join(root, 'books'), path.join(output, 'books'), {
  recursive: true,
  filter,
});

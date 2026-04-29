import { readFile } from 'node:fs/promises';

const requiredFiles = [
  'index.html',
  'src/main.js',
  'src/styles.css',
];

const requiredContent = [
  ['index.html', 'id="app"'],
  ['src/main.js', 'Melano Inc.'],
  ['src/main.js', 'feature-grid'],
  ['src/styles.css', '.hero'],
];

for (const file of requiredFiles) {
  await readFile(file, 'utf8');
}

for (const [file, expected] of requiredContent) {
  const contents = await readFile(file, 'utf8');
  if (!contents.includes(expected)) {
    throw new Error(`${file} is missing expected content: ${expected}`);
  }
}

console.log('Smoke test passed: app shell and feature content are present.');

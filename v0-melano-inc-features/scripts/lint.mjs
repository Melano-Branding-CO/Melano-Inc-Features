import { readFileSync } from 'node:fs';

const requiredFiles = [
  'index.html',
  'src/main.js',
  'src/styles.css',
];

for (const file of requiredFiles) {
  const contents = readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');

  if (!contents.trim()) {
    throw new Error(`${file} is empty`);
  }
}

console.log('Starter app lint checks passed.');

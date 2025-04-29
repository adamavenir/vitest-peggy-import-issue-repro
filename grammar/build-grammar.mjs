import fs from 'fs';
import path from 'path';
import peggy from 'peggy';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const grammarFile = path.join(__dirname, 'calc.peggy');
const outDir = path.join(__dirname, 'generated');
const parserFile = path.join(outDir, 'parser.mjs');

fs.mkdirSync(outDir, { recursive: true });

const grammar = fs.readFileSync(grammarFile, 'utf8');
const jsSource = peggy.generate(grammar, {
  output: 'source',
  format: 'es',          // 100 % ESM
  allowedStartRules: ['Start']
});

fs.writeFileSync(parserFile, jsSource);
console.log('Generated →', parserFile);
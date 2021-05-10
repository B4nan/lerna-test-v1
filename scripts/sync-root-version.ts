import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const path = resolve(__dirname, '..', 'package.json');
const root = readFileSync(path).toString();
const json = JSON.parse(root);
const version = json.version.split('.');
version[2]++;
json.version = version.join('.');
writeFileSync(path, JSON.stringify(json, null, 4));

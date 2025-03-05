import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';
import { readFile } from '../src/fileReader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join('__tests__/__fixtures__', filename);

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const expectedStylish = readFile(getFixturePath('expected_output.txt'));
const expectedPlain = readFile(getFixturePath('expected_output_plain.txt'));
const expectedJson = readFile(getFixturePath('expected_output.json'));

test('Verificar estructura del proyecto', () => {
  const requiredFiles = [
    'src/index.js',
    'bin/gendiff.js',
    'package.json',
    '__tests__/20-index.test.js',
  ];

  requiredFiles.forEach((filePath) => {
    const fullPath = path.join(__dirname, '..', filePath);
    expect(fs.existsSync(fullPath)).toBe(true);
  });
});

test('genDiff con formato Stylish', () => {
  expect(genDiff(file1Json, file2Json)).toEqual(expectedStylish.trim());
});

test('genDiff con formato Plain', () => {
  expect(genDiff(file1Json, file2Json, 'plain')).toEqual(expectedPlain.trim());
});

test('genDiff con formato JSON', () => {
  expect(genDiff(file1Json, file2Json, 'json')).toEqual(expectedJson.trim());
});

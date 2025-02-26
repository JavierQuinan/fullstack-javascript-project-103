import { readFile } from '../src/fileReader.js';
import { parseFile } from '../src/parser.js';
import { compareFiles } from '../src/comparator.js';
import { formatStylish } from '../src/formatters/stylish.js';
import path from 'path';

const getFixturePath = (filename) => path.join('__tests__/__fixtures__', filename);

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');

const file1Yaml = getFixturePath('file1.yml');
const file2Yaml = getFixturePath('file2.yml');

const expectedOutput = readFile(getFixturePath('expected_output.txt'));

test('Comparación de archivos JSON', () => {
  const data1 = parseFile(readFile(file1Json), file1Json);
  const data2 = parseFile(readFile(file2Json), file2Json);
  const result = formatStylish(compareFiles(data1, data2));

  expect(result.trim()).toEqual(expectedOutput.trim());
});

test('Comparación de archivos YAML', () => {
  const data1 = parseFile(readFile(file1Yaml), file1Yaml);
  const data2 = parseFile(readFile(file2Yaml), file2Yaml);
  const result = formatStylish(compareFiles(data1, data2));

  expect(result.trim()).toEqual(expectedOutput.trim());
});

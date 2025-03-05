import { formatJson } from '../src/formatters/json.js';
import { compareFiles } from '../src/comparator.js';
import { readFile } from '../src/fileReader.js';
import { parseFile } from '../src/parser.js';
import path from 'path';

const getFixturePath = (filename) => path.join('__tests__/__fixtures__', filename);

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const expectedJson = readFile(getFixturePath('expected_output.json'));

test('Comparación de archivos en formato JSON', () => {
  const data1 = parseFile(readFile(file1), file1);
  const data2 = parseFile(readFile(file2), file2);
  const diff = compareFiles(data1, data2);
  const result = formatJson(diff);

  expect(result.trim()).toEqual(expectedJson.trim());
});

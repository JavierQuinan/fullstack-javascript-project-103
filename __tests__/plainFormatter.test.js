import { readFile } from '../src/fileReader.js';
import { parseFile } from '../src/parser.js';
import { compareFiles } from '../src/comparator.js';
import { formatPlain } from '../src/formatters/plain.js';
import path from 'path';

const getFixturePath = (filename) => path.join('__tests__/__fixtures__', filename);

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');

const expectedPlainOutput = readFile(getFixturePath('expected_plain_output.txt'));

test('Comparación de archivos JSON en formato plain', () => {
  const data1 = parseFile(readFile(file1Json), file1Json);
  const data2 = parseFile(readFile(file2Json), file2Json);
  const result = formatPlain(compareFiles(data1, data2));

  expect(result.trim()).toEqual(expectedPlainOutput.trim());
});

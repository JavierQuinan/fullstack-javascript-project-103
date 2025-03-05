import { readFile } from '../src/fileReader.js';
import genDiff from '../src/index.js';
import path from 'path';

const getFixturePath = (filename) => path.join('__tests__/__fixtures__', filename);

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const expectedOutput = readFile(getFixturePath('expected_output.txt'));

test('Prueba básica de genDiff con JSON', () => {
  const result = genDiff(file1Json, file2Json);
  expect(result.trim()).toEqual(expectedOutput.trim());
});

import { genDiff } from '../bin/gendiff.js';  // Ajustamos la ruta para importar desde 'bin/gendiff.js'

test('Prueba básica de genDiff con JSON', () => {
  const file1Json = '__tests__/__fixtures__/file1.json';
  const file2Json = '__tests__/__fixtures__/file2.json';

  const result = genDiff(file1Json, file2Json);  // Usamos la función genDiff

  const expectedOutput = readFile('__tests__/__fixtures__/expected_output.txt');
  expect(result.replace(/\s+/g, '').trim()).toEqual(expectedOutput.replace(/\s+/g, '').trim());
});


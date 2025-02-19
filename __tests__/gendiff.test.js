import { parseFile } from '../src/parser.js';
import { compareFiles } from '../src/comparator.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración para rutas absolutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de archivos de prueba
const jsonFile1 = path.join(__dirname, '__fixtures__/file1.json');
const jsonFile2 = path.join(__dirname, '__fixtures__/file2.json');

const yamlFile1 = path.join(__dirname, '__fixtures__/file1.yml');
const yamlFile2 = path.join(__dirname, '__fixtures__/file2.yml');

// Resultado esperado
const expectedDiff = `{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('Comparación de archivos JSON', () => {
  const data1 = parseFile(jsonFile1);
  const data2 = parseFile(jsonFile2);

  expect(compareFiles(data1, data2)).toBe(expectedDiff);
});

test('Comparación de archivos YAML', () => {
  const data1 = parseFile(yamlFile1);
  const data2 = parseFile(yamlFile2);

  expect(compareFiles(data1, data2)).toBe(expectedDiff);
});


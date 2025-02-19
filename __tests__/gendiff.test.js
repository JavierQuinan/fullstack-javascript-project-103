import { readFile } from '../src/fileReader.js';
import { parseJson } from '../src/parser.js';
import { compareFiles } from '../src/comparator.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración para rutas absolutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas de archivos de prueba
const file1Path = path.join(__dirname, '__fixtures__/file1.json');
const file2Path = path.join(__dirname, '__fixtures__/file2.json');

// Contenido esperado de comparación
const expectedDiff = `{
  - follow: false
    host: codica.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('Comparación de archivos JSON planos', () => {
  const data1 = parseJson(readFile(file1Path));
  const data2 = parseJson(readFile(file2Path));

  expect(compareFiles(data1, data2)).toBe(expectedDiff);
});

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

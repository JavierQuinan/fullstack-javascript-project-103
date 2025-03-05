import fs from 'fs';
import path from 'path';

export const getFixturePath = (filename) => path.join('__tests__', '__fixtures__', filename);

export const readFile = (filepath) => {
  try {
    return fs.readFileSync(filepath, 'utf-8');
  } catch (error) {
    throw new Error(`Error al leer el archivo ${filepath}: ${error.message}`);
  }
};

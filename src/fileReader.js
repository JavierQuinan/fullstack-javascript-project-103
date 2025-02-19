import fs from 'fs';
import path from 'path';

export const readFile = (filepath) => {
  try {
    const absolutePath = path.resolve(process.cwd(), filepath);
    return fs.readFileSync(absolutePath, 'utf-8');
  } catch (error) {
    console.error(`Error al leer el archivo ${filepath}:`, error.message);
    process.exit(1);
  }
};

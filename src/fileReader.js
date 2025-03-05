import fs from 'fs';
import path from 'path';

export const readFile = (filepath) => {
  try {
    const absolutePath = path.resolve(process.cwd(), filepath);
    return fs.readFileSync(absolutePath, 'utf-8');
  } catch (error) {
    throw new Error(`Error al leer el archivo ${filepath}: ${error.message}`);
  }  
};

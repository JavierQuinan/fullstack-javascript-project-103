import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/**
 * Lee y analiza un archivo JSON o YAML.
 * @param {string} filepath - Ruta del archivo.
 * @returns {Object} - Datos analizados.
 */
export const parseFile = (filepath) => {
  const ext = path.extname(filepath); // Obtener la extensión del archivo
  const data = fs.readFileSync(filepath, 'utf-8'); // Leer el archivo

  switch (ext) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error(`Formato no soportado: ${ext}`);
  }
};

  
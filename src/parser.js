import path from 'path';
import yaml from 'js-yaml';

/**
 * Parsea el contenido de un archivo JSON o YAML
 * @param {string} content - Contenido del archivo
 * @param {string} filePath - Ruta del archivo (para identificar la extensión)
 * @returns {object} - Objeto parseado
 */
export const parseFile = (content, filePath) => {
  const extension = path.extname(filePath);

  if (extension === '.json') {
    return JSON.parse(content);
  }
  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(content);
  }

  throw new Error(`Unsupported file format: ${extension}`);
};
  
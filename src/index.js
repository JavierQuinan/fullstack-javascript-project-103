import { readFile } from './fileReader.js';
import { parseFile } from './parser.js';
import { compareFiles } from './comparator.js';
import formatStylish from './formatters/stylish.js';
import formatPlain from './formatters/plain.js';
import formatJson from './formatters/json.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
};

export default function genDiff(filepath1, filepath2, format = 'stylish') {
  const content1 = readFile(filepath1);
  const content2 = readFile(filepath2);

  const data1 = parseFile(content1, filepath1);
  const data2 = parseFile(content2, filepath2);

  const diff = compareFiles(data1, data2);
  
  if (!formatters[format]) {
    throw new Error(`Formato desconocido: ${format}`);
  }

  return formatters[format](diff);
}

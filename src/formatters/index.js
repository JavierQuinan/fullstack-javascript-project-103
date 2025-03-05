import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const formatters = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
};

export default (diff, format = 'stylish') => {
  if (!formatters[format]) {
    throw new Error(`Formato desconocido: ${format}`);
  }
  return formatters[format](diff);
};

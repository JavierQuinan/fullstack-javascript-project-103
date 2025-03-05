import { formatStylish } from './stylish.js';
import { formatJson } from './json.js';
import { formatPlain } from './plain.js';

const formatDiff = (diff, format) => {
  switch (format) {
    case 'stylish':
      return formatStylish(diff);
    case 'plain':
      return formatPlain(diff);
    case 'json':
      return formatJson(diff);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default formatDiff;


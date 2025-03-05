import { formatStylish } from './stylish.js';
import { formatPlain } from './plain.js';

const formatDiff = (diff, format = 'stylish') => {
  if (format === 'plain') {
    return formatPlain(diff);
  }
  return formatStylish(diff);
};

export { formatDiff };

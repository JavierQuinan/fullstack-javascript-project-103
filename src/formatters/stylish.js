const INDENT_SIZE = 4;
const HALF_INDENT = 2;

const makeIndent = (depth) => ' '.repeat(Math.max(0, depth * INDENT_SIZE - HALF_INDENT));

const formatValue = (value, depth) => {
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    const entries = Object.entries(value)
      .map(([key, val]) => `${makeIndent(depth + 1)}  ${key}: ${formatValue(val, depth + 1)}`);
    return `{\n${entries.join('\n')}\n${makeIndent(depth)}  }`;
  }
  return String(value);
};

const formatStylish = (diff, depth = 1) => {
  const indent = makeIndent(depth);
  const lines = diff.map(({ key, type, value, oldValue, newValue, children }) => {
    if (type === 'nested') {
      return `${indent}  ${key}: {\n${formatStylish(children, depth + 1)}\n${indent}  }`;
    }
    if (type === 'added') {
      return `${indent}+ ${key}: ${formatValue(value, depth)}`;
    }
    if (type === 'removed') {
      return `${indent}- ${key}: ${formatValue(value, depth)}`;
    }
    if (type === 'updated') {
      return `${indent}- ${key}: ${formatValue(oldValue, depth)}\n${indent}+ ${key}: ${formatValue(newValue, depth)}`;
    }
    return `${indent}  ${key}: ${formatValue(value, depth)}`;
  });

  return `{\n${lines.join('\n')}\n${makeIndent(depth - 1)}}`;
};

export { formatStylish };

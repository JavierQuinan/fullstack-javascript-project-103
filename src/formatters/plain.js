const formatValue = (value) => {
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    if (typeof value === 'object' && value !== null) {
      return '[complex value]';
    }
    return String(value);
  };
  
  const formatPlain = (diff, path = '') => {
    const lines = diff
      .map(({ key, type, value, oldValue, newValue, children }) => {
        const propertyPath = path ? `${path}.${key}` : key;
  
        if (type === 'nested') {
          return formatPlain(children, propertyPath);
        }
        if (type === 'added') {
          return `Property '${propertyPath}' was added with value: ${formatValue(value)}`;
        }
        if (type === 'removed') {
          return `Property '${propertyPath}' was removed`;
        }
        if (type === 'updated') {
          return `Property '${propertyPath}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
        }
        return null;
      })
      .filter(Boolean);
  
    return lines.join('\n');
  };
  
  export default formatPlain;
  
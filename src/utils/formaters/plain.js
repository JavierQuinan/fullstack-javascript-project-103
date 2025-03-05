import _ from 'lodash';
import {
  ADD_VALUE, CHANGED_VALUE, DELETED_VALUE, NESTED_VALUE, ROOT_VALUE, UNCHANGED_VALUE,
} from '../../constants.js';

const buildPropertyPath = (property, ancestors) => [...ancestors, property].join('.');
const formatValue = (value) => {
  if (value === null) return value;

  if (_.isObject(value)) return '[complex value]';

  return typeof value === 'string' ? `'${value}'` : String(value);
};

const nodeHandlers = {
  added: (node, path) => (
    `Property '${buildPropertyPath(node.key, path)}' was added with value: ${formatValue(node.value)}`
  ),
  deleted: (node, path) => (
    `Property '${buildPropertyPath(node.key, path)}' was removed`
  ),
  changed: (node, path) => {
    const oldValue = formatValue(node.oldValue);
    const newValue = formatValue(node.newValue);
    return `Property '${buildPropertyPath(node.key, path)}' was updated. From ${oldValue} to ${newValue}`;
  },
  nested: (node, path, iterate) => (
    node.children.flatMap((child) => iterate(child, [...path, node.key]))
  ),
  unchanged: () => [],
};


const renderToPlainText = (tree) => {
  const traverse = (node, currentPath) => nodeHandlers[node.type](node, currentPath, traverse);
  return traverse(tree, []).join('\n');
};

export default renderToPlainText;

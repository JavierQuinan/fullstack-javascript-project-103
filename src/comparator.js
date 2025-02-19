import _ from 'lodash';

export const compareFiles = (data1, data2) => {
  const keys = _.sortBy([...new Set([...Object.keys(data1), ...Object.keys(data2)])]); // Ordenar claves

  const diff = keys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return `  - ${key}: ${data1[key]}`; // Eliminado
    }
    if (!Object.hasOwn(data1, key)) {
      return `  + ${key}: ${data2[key]}`; // Agregado
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`; // Cambio de valor
    }
    return `    ${key}: ${data1[key]}`; // Sin cambios
  });

  return `{\n${diff.join('\n')}\n}`;
};

  
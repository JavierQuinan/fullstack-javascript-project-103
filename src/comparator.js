import _ from 'lodash';

/**
 * Compara dos objetos de configuración y devuelve sus diferencias en una estructura recursiva.
 * @param {object} data1 - Primer objeto de configuración.
 * @param {object} data2 - Segundo objeto de configuración.
 * @returns {Array} - Lista de diferencias representadas como objetos.
 */
export const compareFiles = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2)).sort();

  return keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: compareFiles(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return { key, type: 'updated', oldValue: data1[key], newValue: data2[key] };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });
};


  
import _ from 'lodash';

const stringify = (value) => {
  if (value instanceof Object) {
    return '[complex value]';
  } else if (typeof value === 'boolean') {
    return `${value}`;
  }
  return `'${value}'`;
};

const render = (ast) => {
  const iter = (arr, parentKey) => {
    const fullKey = obj => [...parentKey, obj.key];
    const beginStr = obj => `Property '${fullKey(obj).join('.')}'`;

    const propperString = {
      same: obj => `${beginStr(obj)} was the same`,
      new: obj => `${beginStr(obj)} was added with value: ${stringify(obj.value)}`,
      changed: obj => `${beginStr(obj)} was updated. From ${stringify(obj.value1)} to ${stringify(obj.value2)}`,
      deleted: obj => `${beginStr(obj)} was removed`,
      object: obj => iter(obj.children, fullKey(obj)),
    };
    const newArr = arr.reduce((acc, obj) => [...acc, propperString[obj.type](obj)], []);
    return _.flatten(newArr).join('\n');
  };

  return `${iter(ast, [])}\n`;
};
export default render;

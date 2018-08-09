const getIndent = depth => '    '.repeat(depth);

const stringify = (value, depth = 0) => {
  if (!(value instanceof Object)) {
    return value;
  }
  const keys = Object.keys(value);
  const str = keys
    .map(key => `${getIndent(depth + 1)}${key}: ${stringify(value[key], depth + 1)}`).join('\n');

  return `{\n${str}\n${getIndent(depth)}}`;
};

const render = (ast) => {
  const iter = (arr, depth) => {
    const propperString = {
      same: obj => `${getIndent(depth)}    ${obj.key}: ${stringify(obj.value, depth + 1)}\n`,
      new: obj => `${getIndent(depth)}  + ${obj.key}: ${stringify(obj.value, depth + 1)}\n`,
      modiffied: obj => `${getIndent(depth)}  + ${obj.key}: ${stringify(obj.value2, depth + 1)}\n ${getIndent(depth)} - ${obj.key}: ${stringify(obj.value1, depth + 1)}\n`,
      deleted: obj => `${getIndent(depth)}  - ${obj.key}: ${stringify(obj.value, depth + 1)}\n`,
      object: obj => `${getIndent(depth)}    ${obj.key}: {\n${iter(obj.children, depth + 1)} ${getIndent(depth)}   }\n`,
    };
    return arr.reduce((acc, obj) => acc.concat(propperString[obj.type](obj)), '');
  };
  return `{\n${iter(ast, 0)}}\n`;
};

export default render;

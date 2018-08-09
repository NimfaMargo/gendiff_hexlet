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
      same: obj => `${getIndent(depth)}    ${obj.key}: ${stringify(obj.value, depth + 1)}`,
      new: obj => `${getIndent(depth)}  + ${obj.key}: ${stringify(obj.value, depth + 1)}`,
      changed: obj => [`${getIndent(depth)}  + ${obj.key}: ${stringify(obj.value2, depth + 1)}`, `${getIndent(depth)}  - ${obj.key}: ${stringify(obj.value1, depth + 1)}`],
      deleted: obj => `${getIndent(depth)}  - ${obj.key}: ${stringify(obj.value, depth + 1)}`,
      object: obj => [`${getIndent(depth)}    ${obj.key}: {`, iter(obj.children, depth + 1), `${getIndent(depth)}    }`],
    };


    return arr.reduce((acc, obj) => {
      const result = propperString[obj.type](obj);
      if (result instanceof Array) {
        return [...acc, result.join('\n')];
      }
      return [...acc, result];
    }, []).join('\n');
  };
  return `{\n${iter(ast, 0)}\n}\n`;
};

export default render;

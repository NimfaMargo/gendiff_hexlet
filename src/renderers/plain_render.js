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
<<<<<<< HEAD
    const makefullKey = obj => [...parentKey, obj.key];
    const makeBegining = obj => `Property '${makefullKey(obj).join('.')}'`;
=======
    const fullKey = obj => [...parentKey, obj.key];
    const makeBegining = obj => `Property '${fullKey(obj).join('.')}'`;
>>>>>>> 68692dba51ac3d44b218b4b76797d5edd8c3dd42

    const propperString = {
      same: obj => `${makeBegining(obj)} was the same`,
      new: obj => `${makeBegining(obj)} was added with value: ${stringify(obj.value)}`,
      changed: obj => `${makeBegining(obj)} was updated. From ${stringify(obj.value1)} to ${stringify(obj.value2)}`,
      deleted: obj => `${makeBegining(obj)} was removed`,
<<<<<<< HEAD
      object: obj => iter(obj.children, makefullKey(obj)),
=======
      object: obj => iter(obj.children, fullKey(obj)),
>>>>>>> 68692dba51ac3d44b218b4b76797d5edd8c3dd42
    };
    return arr.reduce((acc, obj) => [...acc, propperString[obj.type](obj)], []).join('\n');
  };

  return iter(ast, []);
};
export default render;

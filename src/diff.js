import _ from 'lodash';

const findDiffrence = (obj1, obj2) => {
  const uniqValues = _.union(Object.keys(obj1), Object.keys(obj2));

  const newArr = uniqValues.reduce((acc, el) => {
    if (_.has(obj2, el) && obj1[el] === obj2[el]) { // host
      return [...acc, { key: el, value: obj2[el], type: 'same' }];
    } else if (_.has(obj2, el) && !(_.has(obj1, el))) {
      return [...acc, { key: el, value: obj2[el], type: 'new' }];
    } else if (!(_.has(obj2, el))) {
      return [...acc, { key: el, value: obj1[el], type: 'deleted' }];
    } else if (_.has(obj2, el) && (obj1[el] !== obj2[el])) {
      return [...acc, {
        key: el,
        value1: obj1[el],
        value2: obj2[el],
        type: 'modiff',
      }];
    }
    return acc;
  }, []);

  const result = newArr.reduce((acc, el) => {
    if (el.type === 'same') {
      return acc.concat(`    ${el.key}: ${el.value}\n`);
    } else if (el.type === 'modiff') {
      return acc.concat(`  + ${el.key}: ${el.value2}\n  - ${el.key}: ${el.value1}\n`);
    } else if (el.type === 'new') {
      return acc.concat(`  + ${el.key}: ${el.value}\n`);
    } else if (el.type === 'deleted') {
      return acc.concat(`  - ${el.key}: ${el.value}\n`);
    }
    return acc;
  }, '');
  return `{\n${result}}\n`;
};

export default findDiffrence;

import _ from 'lodash';
import fs from 'fs';

const parse = (filePath) => {
  const newStr = fs.readFileSync(`${filePath}`, 'utf-8');
  return newStr.length === 0 ? {} : JSON.parse(newStr);
};
const diff = (filePath1, filePath2) => {
  const obj1 = parse(filePath1);
  const obj2 = parse(filePath2);
  const uniqValues = _.union(Object.keys(obj1), Object.keys(obj2), 'utf-8');

  const newArr = uniqValues.reduce((acc, el) => {
    if (_.has(obj2, el) && obj1[el] === obj2[el]) { // host
      return [...acc, { key: el, value: obj2[el], type: 'same' }];
    } else if (_.has(obj2, el) && !(_.has(obj1, el))) {
      return [...acc, { key: el, value: obj2[el], type: 'new' }];
    } else if (!(_.has(obj2, el))) {
      return [...acc, { key: el, value: obj1[el], type: 'delete' }];
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
    } else if (el.type === 'delete') {
      return acc.concat(`  - ${el.key}: ${el.value}\n`);
    }
    return acc;
  }, '');
  return `{\n${result}}\n`;
};

export default diff;

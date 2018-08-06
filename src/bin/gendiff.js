#!/usr/bin/env node
import _ from 'lodash';

const program = require('commander');

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);

const diff = (file1, file2) => {
  const obj1 = JSON.parse(file1);
  const obj2 = JSON.parse(file2);
  const uniqValues = _.union(Object.keys(obj1), Object.keys(obj2));

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

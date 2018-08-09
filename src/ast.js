import _ from 'lodash';

const astDiff = (obj1, obj2) => {
  const uniqValues = _.union(Object.keys(obj1), Object.keys(obj2));

  const iter = (el) => {
    if (obj1[el] === obj2[el]) {
      return { key: el, value: obj2[el], type: 'same' };
    }
    if (!_.has(obj1, el)) {
      return { key: el, value: obj2[el], type: 'new' };
    }
    if (!_.has(obj2, el)) {
      return { key: el, value: obj1[el], type: 'deleted' };
    }
    if (_.isObject(obj1[el]) && _.isObject(obj2[el])) {
      const children = astDiff(obj1[el], obj2[el]);
      return { key: el, type: 'object', children };
    }
    return {
      key: el,
      value1: obj1[el],
      value2: obj2[el],
      type: 'modiffied',
    };
  };
  return uniqValues.map(iter);
};

export default astDiff;

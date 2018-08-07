import ini from 'ini';
import fs from 'fs';
import yamlParser from 'js-yaml';
import path from 'path';

const selectPropperFormat = (filePath) => {
  const selector = {
    '.json': str => JSON.parse(str),
    '.yaml': str => yamlParser.safeLoad(str),
    '.ini': str => ini.parse(str),
  };
  return selector[path.extname(filePath)];
};

const parse = (filePath) => {
  const newStr = fs.readFileSync(`${filePath}`, 'utf-8');
  return selectPropperFormat(filePath)(newStr);
};

export default parse;

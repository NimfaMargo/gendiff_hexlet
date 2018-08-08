import ini from 'ini';
import yamlParser from 'js-yaml';

const selector = {
  '.json': JSON.parse,
  '.yaml': yamlParser.safeLoad,
  '.ini': ini.parse,
};

export default (extension, data) => selector[extension](data);

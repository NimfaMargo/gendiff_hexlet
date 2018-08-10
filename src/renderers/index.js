import recursiveRender from './recursive_render';
import plainRender from './plain_render';
import jsonRender from './json_render';

const selector = {
  recursive: recursiveRender,
  plain: plainRender,
  json: jsonRender,
};

export default (ast, format) => selector[format](ast);

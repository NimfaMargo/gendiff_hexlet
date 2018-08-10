import recursiveRender from './recursive_render';
import plainRender from './plain_render';

const selector = {
  recursive: recursiveRender,
  plain: plainRender,
};

export default (ast, format) => selector[format](ast)

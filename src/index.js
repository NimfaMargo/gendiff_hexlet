import path from 'path';
import fs from 'fs';
import parse from './parse';
import findDiffrence from './ast';
import render from './renderers/recursive_render';

export default (filePath1, filePath2) => {
  const format1 = path.extname(filePath1);
  const format2 = path.extname(filePath2);
  const firstFileData = fs.readFileSync(`${filePath1}`, 'utf-8');
  const secondFileData = fs.readFileSync(`${filePath2}`, 'utf-8');

  if (format1 !== format2) {
    throw new Error('Files formats shood be the same');
  }
  const parsed1 = parse(format1, firstFileData);
  const parsed2 = parse(format2, secondFileData);
  return render(findDiffrence(parsed1, parsed2));
};

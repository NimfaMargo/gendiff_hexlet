import path from 'path';
import fs from 'fs';
import parse from './parse';
import diff from './diff';

const allowedFormats = ['.json', '.yaml', '.ini'];

const validateFilesFormats = (filePath1, filePath2) => {
  const extension1 = path.extname(filePath1);
  const extension2 = path.extname(filePath2);
  const file1 = fs.readFileSync(`${filePath1}`, 'utf-8');
  const file2 = fs.readFileSync(`${filePath2}`, 'utf-8');

  if (extension1 !== extension2) {
    throw new Error('Files formats shood be the same');
  } else if (!(allowedFormats.includes(extension1)) || !(allowedFormats.includes(extension2))) {
    throw new Error("This file format isn't supported");
  }
  const parsed1 = parse(extension1, file1);
  const parsed2 = parse(extension2, file2);
  return diff(parsed1, parsed2);
};
export default validateFilesFormats;

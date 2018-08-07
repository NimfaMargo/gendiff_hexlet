import path from 'path';

const allowedFormats = ['.json', '.yaml', '.ini'];

const validateFilesFormats = (filePath1, filePath2) => {
  const format1 = path.extname(filePath1);
  const format2 = path.extname(filePath2);

  if (format1 !== format2) {
    throw new Error('Files formats shood be the same');
  } else if (!(allowedFormats.includes(format1)) || !(allowedFormats.includes(format2))) {
    throw new Error("This file format isn't supported");
  }
  return true;
};
export default validateFilesFormats;

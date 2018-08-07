import path from 'path';

const getFixturePath = fileName => path.join(__dirname, '../__fixtures__', fileName);

export default getFixturePath;

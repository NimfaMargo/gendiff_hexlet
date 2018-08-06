import path from 'path';
import fs from 'fs';
import diff from '../src';


const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

test('compare json files', () => {
  const file1 = fs.readFileSync(getFixturePath('before.json'), 'utf-8');
  const file2 = fs.readFileSync(getFixturePath('after.json'), 'utf-8');
  const result = diff(file1, file2);
  const expected = fs.readFileSync(getFixturePath('result'), 'utf-8');
  expect(result).toBe(expected);
});

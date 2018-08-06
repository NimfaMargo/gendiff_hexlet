import path from 'path';
import fs from 'fs';
import diff from '../src/diff';

const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

test('compare json files', () => {
  const result = diff(getFixturePath('before.json'), getFixturePath('after.json'));
  const expected = fs.readFileSync(getFixturePath('result'), 'utf-8');
  expect(result).toBe(expected);
});

test('compare json files atempt 2', () => {
  const result = diff(getFixturePath('before.json'), getFixturePath('after2.json'));
  const expected = fs.readFileSync(getFixturePath('result2'), 'utf-8');
  expect(result).toBe(expected);
});

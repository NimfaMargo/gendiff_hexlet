import path from 'path';
import fs from 'fs';
import diff from '../src';
import { parse } from '../src/diff';

const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

test('compare json files', () => {
  const result = diff(getFixturePath('before.json'), getFixturePath('after.json'));
  const expected = fs.readFileSync(getFixturePath('result'), 'utf-8');
  expect(result).toBe(expected);
});

test('trows error ', () => {
  expect(() => {
    parse(getFixturePath('after2.json'));
  }).toThrow("File can't be empty");
});

import path from 'path';
import context from 'jest-context';
import fs from 'fs';
import diff from '../src';
import { parse } from '../src/diff';

const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

test('compare json files', () => {
  const result = diff(getFixturePath('before.json'), getFixturePath('after.json'));
  const expected = fs.readFileSync(getFixturePath('result'), 'utf-8');
  expect(result).toBe(expected);
});

describe('.parse', () => {
  context('when json file is valid', () => {
    it('returns parsed object', () => {
      const subject = parse(getFixturePath('valid.json'));
      const expected = {
        timeout: 20,
        verbose: true,
        host: 'hexlet.io',
      };

      expect(subject).toEqual(expected);
    });
  });
  context('when json file is invalid', () => {
    it('raises format error', () => {
      expect(() => {
        parse(getFixturePath('invalid.json'));
      }).toThrow();
    });
  });
  context('when json file is empty', () => {
    it('raises error', () => {
      expect(() => {
        parse(getFixturePath('empty.json'));
      }).toThrow("File can't be empty");
    });
  });
});

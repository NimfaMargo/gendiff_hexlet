import context from 'jest-context';
import getFixturePath from './support/fixture_path';
import parse from '../src/parse';

describe('.parse', () => {
  context('when json file is valid', () => {
    it('returns parsed object', () => {
      const subject = parse(getFixturePath('before.json'));
      const expected = {
        host: 'hexlet.io',
        timeout: 50,
        proxy: '123.234.53.22',
        follow: false,
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
      }).toThrow();
    });
  });
});

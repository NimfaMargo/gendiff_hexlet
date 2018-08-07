import path from 'path';
import context from 'jest-context';
import fs from 'fs';
import diff from '../src';
import { parse } from '../src/diff';

const getFixturePath = fileName => path.join(__dirname, '__fixtures__', fileName);

describe('.diff', () => {
  context('compare json files', () => {
    it('returns difference in json files', () => {
      const result = diff(getFixturePath('before.json'), getFixturePath('after.json'));
      const expected = fs.readFileSync(getFixturePath('result'), 'utf-8');
      expect(result).toEqual(expected);
    });

    context('compare yaml files', () => {
      it('returns difference in yaml files', () => {
        const result = diff(getFixturePath('before.yaml'), getFixturePath('after.yaml'));
        const expected = fs.readFileSync(getFixturePath('result'), 'utf-8');
        expect(result).toEqual(expected);
      });
    });
  });
});

describe('.parse', () => {
  // context('when json file is valid', () => {
  //   it('returns parsed object', () => {
  //     const subject = parse(getFixturePath('before.json'));
  //     const expected = {
  //       host: 'hexlet.io',
  //       timeout: 50,
  //       proxy: '123.234.53.22',
  //       follow: false,
  //     };
  //     expect(subject).toEqual(expected);
  //   });
  // });
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

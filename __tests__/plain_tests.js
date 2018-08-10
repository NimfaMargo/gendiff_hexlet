import path from 'path';
import context from 'jest-context';
import fs from 'fs';
import findDiffrence from '../src';

const getRigthPath = (format, fileName) => path.join(__dirname, `__fixtures__/${format}`, fileName);

describe('\n  findDiffrence in flat files in plain format', () => {
  context('compare flat json files', () => {
    it('returns difference in json files in plain format', () => {
      const result = findDiffrence(getRigthPath('json', 'before.json'), getRigthPath('json', 'after.json'), 'plain');
      const expected = fs.readFileSync(getRigthPath('results', 'plain_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare flat yaml files', () => {
    it('returns difference in yaml files in plain format', () => {
      const result = findDiffrence(getRigthPath('yaml', 'before.yaml'), getRigthPath('yaml', 'after.yaml'), 'plain');
      const expected = fs.readFileSync(getRigthPath('results', 'plain_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare flat ini files', () => {
    it('returns difference in ini files in plain format', () => {
      const result = findDiffrence(getRigthPath('ini', 'before.ini'), getRigthPath('ini', 'after.ini'), 'plain');
      const expected = fs.readFileSync(getRigthPath('results', 'plain_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
});


describe('\n  findDiffrence in recursive files in plain format', () => {
  context('compare recursive json files', () => {
    it('returns difference in recursive json files in plain format', () => {
      const result = findDiffrence(getRigthPath('json', 'recursive_before.json'), getRigthPath('json', 'recursive_after.json'), 'plain');
      const expected = fs.readFileSync(getRigthPath('results', 'recursive_plain_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare recursive yaml files', () => {
    it('returns difference in recursive yaml files in plain format', () => {
      const result = findDiffrence(getRigthPath('yaml', 'recursive_before.yaml'), getRigthPath('yaml', 'recursive_after.yaml'), 'plain');
      const expected = fs.readFileSync(getRigthPath('results', 'recursive_plain_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare recursive ini files', () => {
    it('returns difference in recursive ini files in plain format', () => {
      const result = findDiffrence(getRigthPath('ini', 'recursive_before.ini'), getRigthPath('ini', 'recursive_after.ini'), 'plain');
      const expected = fs.readFileSync(getRigthPath('results', 'recursive_plain_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
});

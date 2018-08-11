import path from 'path';
import context from 'jest-context';
import fs from 'fs';
import findDiffrence from '../src';

const getRigthPath = (format, fileName) => path.join(__dirname, `__fixtures__/${format}`, format === 'results' ? fileName : `${fileName}.${format}`);

describe('findDiffrence', () => {
  context('compare flat json files', () => {
    it('returns difference in json files', () => {
      const result = findDiffrence(getRigthPath('json', 'before'), getRigthPath('json', 'after'));
      const expected = fs.readFileSync(getRigthPath('results', 'result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
  context('compare recursive yaml files', () => {
    it('returns difference in recursive yaml files', () => {
      const result = findDiffrence(getRigthPath('yaml', 'recursive_before'), getRigthPath('yaml', 'recursive_after'));
      const expected = fs.readFileSync(getRigthPath('results', 'recursive_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
  context('compare recursive ini files', () => {
    it('returns difference in recursive ini files in plain format', () => {
      const result = findDiffrence(getRigthPath('ini', 'recursive_before'), getRigthPath('ini', 'recursive_after'), 'plain');
      const expected = fs.readFileSync(getRigthPath('results', 'recursive_plain_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare flat json files ', () => {
    it('returns difference in recursive json files in plain format', () => {
      const result = findDiffrence(getRigthPath('json', 'before'), getRigthPath('json', 'after'), 'plain');
      const expected = fs.readFileSync(getRigthPath('results', 'plain_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare flat yaml files', () => {
    it('returns difference in yaml files in json format', () => {
      const result = findDiffrence(getRigthPath('yaml', 'before'), getRigthPath('yaml', 'after'), 'json');
      const expected = fs.readFileSync(getRigthPath('results', 'json_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
  context('compare recursive json files', () => {
    it('returns difference in json files in json format', () => {
      const result = findDiffrence(getRigthPath('json', 'recursive_before'), getRigthPath('json', 'recursive_after'), 'json');
      const expected = fs.readFileSync(getRigthPath('results', 'recursive_json_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
});

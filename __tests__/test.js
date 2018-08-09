import path from 'path';
import context from 'jest-context';
import fs from 'fs';
import findDiffrence from '../src';

const getPathToJson = fileName => path.join(__dirname, '__fixtures__/json', fileName);
const getPathToYaml = fileName => path.join(__dirname, '__fixtures__/yaml', fileName);
const getPathToIni = fileName => path.join(__dirname, '__fixtures__/ini', fileName);

describe('findDiffrence', () => {
  context('compare json files', () => {
    it('returns difference in json files', () => {
      const result = findDiffrence(getPathToJson('before.json'), getPathToJson('after.json'));
      const expected = fs.readFileSync(getPathToJson('result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare yaml files', () => {
    it('returns difference in yaml files', () => {
      const result = findDiffrence(getPathToYaml('before.yaml'), getPathToYaml('after.yaml'));
      const expected = fs.readFileSync(getPathToYaml('result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare ini files', () => {
    it('returns difference in ini files', () => {
      const result = findDiffrence(getPathToIni('before.ini'), getPathToIni('after.ini'));
      const expected = fs.readFileSync(getPathToIni('result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
});

describe('\n  findDiffrence in recursive files', () => {
  context('compare json files', () => {
    it('returns difference in json files', () => {
      const result = findDiffrence(getPathToJson('recursive_before.json'), getPathToJson('recursive_after.json'));
      const expected = fs.readFileSync(getPathToJson('recursive_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare yaml files', () => {
    it('returns difference in yaml files', () => {
      const result = findDiffrence(getPathToYaml('recursive_before.yaml'), getPathToYaml('recursive_after.yaml'));
      const expected = fs.readFileSync(getPathToYaml('recursive_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });

  context('compare ini files', () => {
    it('returns difference in ini files', () => {
      const result = findDiffrence(getPathToIni('recursive_before.ini'), getPathToIni('recursive_after.ini'));
      const expected = fs.readFileSync(getPathToIni('recursive_result'), 'utf-8');
      expect(result).toEqual(expected);
    });
  });
});

import context from 'jest-context';
import getFixturePath from './support/fixture_path';
import validateFilesFormats from '../src/validators';

describe('.validateFilesFormats', () => {
  context('when file are the same', () => {
    it('allows to parse objects', () => {
      const result = validateFilesFormats(getFixturePath('before.json'), getFixturePath('after.json'));
      expect(result).toEqual(true);
    });
  });

  context('when files arn\'t same invalid', () => {
    it('raises not same error', () => {
      expect(() => {
        validateFilesFormats(getFixturePath('before.json'), getFixturePath('after.ini'));
      }).toThrow('Files formats shood be the same');
    });
  });
  context('unsupported file format', () => {
    it('raises unexpected file format error', () => {
      expect(() => {
        validateFilesFormats(getFixturePath('before.json'), getFixturePath('test.txt'));
      }).toThrow();
    });
  });
});

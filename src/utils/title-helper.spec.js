import { titleNameToUrl } from './title-helper';
import { expect } from 'chai';

describe('titleHelper', () => {
  describe('titleNameToUrl', () => {
    it('should strip any spaces, colons, and single quotes from title names and convert to lower case', () => {
      const testTitles = [
        {title: 'TEST TITLE 1', expected: 'test-title-1'},
        {title: `TEST'S TITLE 2`, expected: 'tests-title-2'},
        {title: 'TEST TITLE: 3', expected: 'test-title-3'}
      ];

      testTitles.map(({ title, expected }) => {
        const actual = titleNameToUrl(title);
        expect(actual).to.equal(expected);
      });
    });
  });
});

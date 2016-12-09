import { expect } from 'chai';
import { getTitles } from './title-service';

describe('Title Service', () => {
  describe('getTitles', () => {
    it('returns all 17 Zelda titles', () => {
      const actual = getTitles();

      expect(actual.length).to.equal(17);
    });
  });
});
import { expect } from 'chai';
import initialState from './initial-state';

const { titles, playthroughs, newPlaythrough } = initialState;

describe('initialState', () => {
  describe('titles', () => {
    it('is an empty array', () => {
      expect(titles.length).to.equal(0);
    });
  });

  describe('playthroughs', () => {
    it('is an empty array', () => {
      expect(playthroughs.length).to.equal(0);
    });
  });
});

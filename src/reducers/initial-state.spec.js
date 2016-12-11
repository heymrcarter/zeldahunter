import { expect } from 'chai';
import initialState from './initial-state';

const { titles, progress } = initialState;

describe('initialState', () => {
  describe('titles', () => {
    it('is an empty array', () => {
      expect(titles.length).to.equal(0);
    });
  });

  describe('progress', () => {
    it('is an empty object', () => {
      expect(Object.keys(progress).length).to.equal(0);
    });
  });
});

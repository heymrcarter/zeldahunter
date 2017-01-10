import { expect } from 'chai';
import initialState from './initial-state';

const { titles } = initialState;

describe('initialState', () => {
  describe('titles', () => {
    it('is an empty array', () => {
      expect(titles.length).to.equal(0);
    });
  });
});

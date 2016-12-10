import { expect } from 'chai';
import initialState from './initial-state';

describe('initialState', () => {
  describe('titles', () => {
    it('starts with an empty array', () => {
      expect(initialState.titles.length).to.equal(0);
    });
  });
});

import { expect } from 'chai';
import progressReducer from './progress-reducer';

describe('progressReducer', () => {
  describe('LOAD_PROGRESS_SUCCESS', () => {
    it('returns the loaded progress', () => {
      const expected = {
        'title-1': {
          piecesOfHeart: []
        }
      };

      const action = {
        type: 'LOAD_PROGRESS_SUCCESS',
        progress: expected
      };

      const actual = progressReducer({}, action);

      expect(actual).to.deep.equal(expected);
    });
  });

  describe('default', () => {
    it('returns current state when no actions match', () => {
      const actual = progressReducer({
        'title-1': {
          piecesOfHeart: []
        }
      }, {});

      const expected = {
        'title-1': {
          piecesOfHeart: []
        }
      };

      expect(actual).to.deep.equal(expected);
    });
  });
});

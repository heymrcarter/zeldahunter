import { expect } from 'chai';
import * as actions from '../actions/action-types';
import playthroughReducer from './playthrough-reducer';

describe('playthroughReducer', () => {
  describe('SAVE_PLAYTHROUGH_SUCCESS', () => {
    let playthrough;
    beforeEach(() => {
      playthrough = {
        id: 1,
        name: 'playthrough',
        progress: []
      }
    });

    it('returns the saved playthrough', () => {
      const action = {
        type: actions.SAVE_PLAYTHROUGH_SUCCESS,
        playthrough: playthrough
      };

      const actual = playthroughReducer([], action);

      expect(actual).to.deep.equal(playthrough);
    });
  });

  describe('LOAD_PLAYTHROUGHS_SUCCESS', () => {
    it('returns loaded playthroughs', () => {
      const expectedPlaythroughs = [
        {
          name: 'playthrough-1'
        }
      ];
      
      const action = {
        type: actions.LOAD_PLAYTHROUGHS_SUCCESS,
        playthroughs: expectedPlaythroughs
      };

      const actual = playthroughReducer([], action);

      expect(actual).to.deep.equal(expectedPlaythroughs);
    });
  });
});
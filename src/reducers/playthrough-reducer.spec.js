import { expect } from 'chai';
import * as actions from '../actions/action-types';
import playthroughReducer, { startPlaythroughReducer } from './playthrough-reducer';
import sinon from 'sinon';

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

    it('adds the new playthrough to state', () => {
      const action = {
        type: actions.SAVE_PLAYTHROUGH_SUCCESS,
        playthrough: playthrough
      };

      const actual = playthroughReducer([], action);

      expect(actual).to.deep.equal([playthrough]);
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

  describe('DELETE_PLAYTHROUGH_SUCCESS', () => {
    it('removed the playthrough from state', () => {
      const state = [
        {
          id: 1,
          name: 'playthrough-1',
          titleId: 'titleid-1'
        },
        {
          id: 2,
          name: 'playthrough-2',
          titleId: 'titleid-1'
        },
        {
          id: 3,
          name: 'playthrough-3',
          titleId: 'titleid-2'
        }
      ];

      const action = {
        type: actions.DELETE_PLAYTHROUGH_SUCCESS,
        playthrough: {
          id: 1,
          name: 'playthrough-1',
          titleId: 'titleid-1'
        }
      };

      const actual = playthroughReducer(state, action);

      expect(actual).to.deep.equal(state.filter(p => p.id !== 1));
    });
  });
});
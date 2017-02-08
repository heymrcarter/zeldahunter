import { expect } from 'chai';
import progressReducer from './progress-reducer';
import { LOAD_PROGRESS_SUCCESS, CREATE_PROGRESS_SUCCESS, DELETE_PLAYTHROUGH_SUCCESS } from '../actions/action-types';

describe('progressReducer', () => {
  describe('LOAD_PROGRESS_SUCCESS', () => {
    it('returns the loaded progress', () => {
      const action = {
        type: LOAD_PROGRESS_SUCCESS,
        progress: [
          { name: 'progress-1' }
        ]
      };
      const actual = progressReducer([], action);

      expect(actual.length).to.equal(1);
      expect(actual[0].name).to.equal('progress-1');
    });
  });

  describe('CREATE_PROGRESS_SUCCESS', () => {
    it('adds the new progress to state', () => {
      const progress = {
        id: 'progress-1',
        titleId: 'title-id',
        playthroughId: 'playthrough-id',
        collectables: []
      };
      
      const action = {
        type: CREATE_PROGRESS_SUCCESS,
        progress
      };

      const actual = progressReducer([], action);

      expect(actual).to.deep.equal([progress]);
    });
  });

  describe('DELETE_PLAYTHROUGH_SUCCESS', () => {
    it('returns the progress without the deleted progress', () => {
      const progress = [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ];

      const action = {
        type: DELETE_PLAYTHROUGH_SUCCESS,
        progress: { id: 1 }
      };

      const actual = progressReducer(progress, action);

      expect(actual).to.deep.equal(progress.filter(p => p.id !== 1));
    });
  });

  describe('any other action', () => {
    it('returns the current progress state', () => {
      const action = {
        type: 'ANY_OTHER_ACTION',
        progress: [
          { name: 'progress-1' }
        ]
      };
      const actual = progressReducer([], action);

      expect(actual.length).to.equal(0);
    });
  });
});
import { expect } from 'chai';
import progressReducer from './progress-reducer';
import { LOAD_PROGRESS_SUCCESS, CREATE_PROGRESS_SUCCESS } from '../actions/action-types';

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
    it('returns the newly created progress', () => {
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

      expect(actual).to.deep.equal(progress);
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
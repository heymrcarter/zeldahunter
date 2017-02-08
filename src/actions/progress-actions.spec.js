import { expect } from 'chai';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as progressActions from './progress-actions';
import * as actionTypes from './action-types';
import fetchMock from 'fetch-mock';

describe('progressActions', () => {
  describe('loadProgressSuccess', () => {
    it('returns a LOAD_PROGRESS_SUCCESS action', () => {
      const progress = [];
      const actual = progressActions.loadProgressSuccess(progress);

      expect(actual.type).to.equal('LOAD_PROGRESS_SUCCESS');
      expect(actual.progress instanceof Array).to.equal(true);
      expect(actual.progress).to.deep.equal(progress);
    });
  });

  describe('loadProgress', () => {
    let mockStore;

    beforeEach(() => {
      const middlewares = [thunk];
      mockStore = configureMockStore(middlewares);
    });

    it('dispatches a LOAD_PROGRESS_SUCCESS action', (done) => {
      const progress = [];
      const expectedAction = {
        type: actionTypes.LOAD_PROGRESS_SUCCESS,
        progress
      };

      const store = mockStore({}, expectedAction);

      store.dispatch(progressActions.loadProgress())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.equal('LOAD_PROGRESS_SUCCESS');
          done();
        });
    });
  });

  describe('createProgressSuccess', () => {
    it('returns a CREATE_PROGRESS_SUCCESS action', () => {
      const progress = { name: 'progress' };
      const actual = progressActions.createProgressSuccess(progress);

      expect(actual.progress).to.deep.equal(progress);
      expect(actual.type).to.equal('CREATE_PROGRESS_SUCCESS');
    });
  });

  describe('createProgress', () => {
    let mockStore;

    beforeEach(() => {
      const middlewares = [thunk];
      mockStore = configureMockStore(middlewares);

      fetchMock.get(`${process.env.ZH_PROGRESS_ENDPOINT}/title-id`, { bottles: []});
    });

    afterEach(() => {
      fetchMock.restore();
    });

    it('dispatches a CREATE_PROGRESS_SUCCESS action', (done) => {
      const progress = {
        id: 1,
        titleId: 'title-id',
        playthroughId: 'playthrough-id',
        collectables: { bottles: [] }
      };
      
      const expectedAction = {
        type: actionTypes.CREATE_PROGRESS_SUCCESS,
        progress
      };

      const store = mockStore({}, expectedAction);

      store.dispatch(progressActions.createProgress('title-id', 'playthrough-id'))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).to.deep.equal(expectedAction);
          done();
        });
    });
  });

  describe('deleteProgressSuccess', () => {
    it('returns a DELETE_PROGRESS_SUCCESS action', () => {
      const progress = { id: 1, titleId: 'the-title', playthroughId: 'the-playthrough' };
      const actual = progressActions.deleteProgressSuccess(progress);

      expect(actual.progress).to.equal(progress);
      expect(actual.type).to.equal('DELETE_PROGRESS_SUCCESS');
    });
  });

  describe('deleteProgress', () => {
    let mockStore;

    beforeEach(() => {
      const middleware = [thunk];
      mockStore = configureMockStore(middleware);
    });
    
    it('dispatches a DELETE_PROGRESS_SUCCESS action', (done) => {
      const progress = {
        id: 1,
        titleId: 'title-id',
        playthroughId: 'playthrough-id',
        collectables: {
          bottles: []
        }        
      };

      const expectedAction = { type: 'DELETE_PROGRESS_SUCCESS', progress };

      const store = mockStore({});

      store.dispatch(progressActions.deleteProgress('title-id', 'playthrough-id'))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).to.deep.equal(expectedAction);
          done();
        })
        .catch(error => done(error));
    });
  });
});

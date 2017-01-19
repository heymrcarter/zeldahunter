import { expect } from 'chai';
import * as playthroughActions from './playthrough-actions';
import * as actionTypes from './action-types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('playthroughActions', () => {
  describe('savePlaythroughSuccess', () => {
    let playthrough;

    beforeEach(() => {
      playthrough = {
        id: '1',
        name: 'playthrough-1',
        progress: [],
        titleId: 'title-1'
      };
    });

    it('returns a SAVE_PLAYTHROUGH_SUCCESS action', () => {
      const actual = playthroughActions.savePlaythroughSuccess(playthrough);

      expect(actual.type).to.equal(actionTypes.SAVE_PLAYTHROUGH_SUCCESS);
      expect(actual.playthrough).to.deep.equal(playthrough);
    });
  });

  describe('savePlaythrough', () => {
    let mockStore;

    beforeEach(() => {
      const middleware = [thunk];
      mockStore = configureMockStore(middleware);
    });

    it('dispatches a SAVE_PLAYTHROUGH_SUCCESS action', (done) => {
      const playthrough = {
        id: 1,
        name: 'playthrough-1',
        progress: [],
        titleId: 'title-1'
      };

      const expectedAction = {
        type: actionTypes.SAVE_PLAYTHROUGH_SUCCESS,
        body: { playthrough }
      };
      
      const store = mockStore({}, expectedAction);
      store.dispatch(playthroughActions.savePlaythrough(playthrough))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.equal('SAVE_PLAYTHROUGH_SUCCESS');
          done();
        })
        .catch(() => {
          
        });
    });
  });

  describe('loadPlaythroughsSuccess', () => {
    it('returns a LOAD_PLAYTHROUGHS_SUCCESS action', () => {
      const playthroughs = [];
      const actual = playthroughActions.loadPlaythroughsSuccess(playthroughs);

      expect(actual.type).to.equal('LOAD_PLAYTHROUGHS_SUCCESS');
      expect(actual.playthroughs).to.equal(playthroughs);
    });
  });

  describe('loadPlaythroughs', () => {
    let mockStore;

    beforeEach(() => {
      const middlewares = [thunk];
      mockStore = configureMockStore(middlewares);
    });

    it('dispatches a LOAD_PLAYTHROUGHS_SUCCESS action', (done) => {
      const playthroughs = [];

      const expectedAction = {
        type: actionTypes.LOAD_PLAYTHROUGHS_SUCCESS,
        body: { playthroughs }
      };

      const store = mockStore({}, expectedAction);
      store.dispatch(playthroughActions.loadPlaythroughs())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.equal('LOAD_PLAYTHROUGHS_SUCCESS');
          done();
        });
    }); 
  });
});
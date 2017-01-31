import { expect } from 'chai';
import * as titleActions from './title-actions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

describe('titleActions', () => {
  describe('loadTitlesSuccess', () => {
    it('returns a LOAD_TITLES_SUCCESS action', () => {
      const expected = {
        type: 'LOAD_TITLES_SUCCESS',
        titles: ['title1', 'title2']
      };

      const actual = titleActions.loadTitlesSuccess(['title1', 'title2']);

      expect(actual).to.deep.equal(expected);
    });
  });

  describe('loadTitles', () => {
    let mockStore;

    beforeEach(() => {
      fetchMock.get(process.env.ZH_TITLES_ENDPOINT, [
        { name: 'title-1' },
        { name: 'title-2' },
        { name: 'title-3' }
      ]);
      
      mockStore = configureMockStore([thunk]);
    });

    afterEach(() => {
      fetchMock.restore();
    });

    it('dispatches a LOAD_TITLES_SUCCESS action', (done) => {
      const expectedAction = {
        type: 'LOAD_TITLES_SUCCESS',
        body: {titles: ['title1', 'title2']}
      };

      const store = mockStore({titles: []}, expectedAction);
      store.dispatch(titleActions.loadTitles()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).to.equal('LOAD_TITLES_SUCCESS');
        done();
      });
    });
  });
});

import { expect } from 'chai';
import * as actions from '../actions/action-types';
import titleReducer from './title-reducer';

describe('titleReducer', () => {
  describe('LOAD_TITLES_SUCCESS', () => {
    it('returns the loaded courses', () => {
      const action = {
        type: actions.LOAD_TITLES_SUCCESS,
        titles: ['title1', 'title2']
      };

      const actual = titleReducer([], action);

      expect(actual.length).to.equal(2);
    });
  });

  describe('default', () => {
    it('returns the current state if no actions match', () => {
      const actual = titleReducer(['title1', 'title2', 'title3'], {});

      expect(actual.length).to.equal(3);
    });
  });
});

import { expect } from 'chai';
import * as progressActions from './progress-actions';

describe('progressActions', () => {
  describe('loadProgressSuccess', () => {
    it('returns a LOAD_PROGRESS_SUCCESS action', () => {
      const progress = {};
      const actual = progressActions.loadProgressSuccess(progress);

      expect(actual.type).to.equal('LOAD_PROGRESS_SUCCESS');
      expect(actual.progress).to.deep.equal(progress);
    });
  });
});

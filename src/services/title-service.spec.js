import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import titleService from './title-service';

describe('TitleService', () => {
  describe('getTitles', () => {
    beforeEach(() => {
      fetchMock.get(process.env.ZH_TITLES_ENDPOINT, [
        { name: 'title-1' },
        { name: 'title-2' },
        { name: 'title-3' },
        { name: 'title-4' }
      ]);
    });

    afterEach(() => {
      fetchMock.restore();
    });
    
    it('returns titles', (done) => {
      titleService.getTitles().then(titles => {
        expect(titles.length).to.equal(4);
        done();
      });
    });
  });
});
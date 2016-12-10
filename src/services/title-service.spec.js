import { expect } from 'chai';
import titleService from './title-service';

describe('TitleService', () => {
  describe('getTitles', () => {
    it('returns all 17 Zelda titles', (done) => {
      titleService.getTitles().then(titles => {
        expect(titles.length).to.equal(17);
        done();
      });
    });
  });
});

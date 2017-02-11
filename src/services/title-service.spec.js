import { expect } from 'chai';
import fetchMock from 'fetch-mock';
import TitleService from './title-service';
import { spy } from 'sinon';

describe('TitleService', () => {
  let setup, mockStorage;

  describe('getTitles', () => {
    beforeEach(() => {
      fetchMock.get(process.env.ZH_TITLES_ENDPOINT, [
        { name: 'title-1' },
        { name: 'title-2' },
        { name: 'title-3' },
        { name: 'title-4' }
      ]);

      mockStorage = {
        getItem: () => {},
        setItem: () => {}
      };

      setup = () => {
        return new TitleService(mockStorage);
      };
    });

    afterEach(() => {
      fetchMock.restore();
    });

    it('checks to see if there are titles in storage', (done) => {
      mockStorage.getItem = () => JSON.stringify([{}]);
      
      const subject = setup();      
      
      const getItemSpy = spy(mockStorage, 'getItem');      

      subject.getTitles()
        .then(() => {
          expect(getItemSpy.calledOnce).to.equal(true);
          done();
        })
        .catch(error => done(error));
    });

    it('returns titles from storage if there are any there', (done) => {
      mockStorage.getItem = () => JSON.stringify([{}]);

      const subject = setup();

      subject.getTitles()
        .then(titles => {
          expect(titles).to.have.length(1);
          done();
        })
        .catch(error =>done(error));
    });

    it('calls the titles api to get the titles if none are in local storage and returns then', (done) => {
      const subject = setup();
      const expected = [
        { name: 'title-1' },
        { name: 'title-2' },
        { name: 'title-3' },
        { name: 'title-4' }
      ];

      subject.getTitles()
        .then(titles => {
          expect(titles).to.deep.equal(expected);
          done();
        })
        .catch(error => done(error));
    });

    it('puts the titles from the api into storage', (done) => {
      const subject = setup();

      const setItemSpy = spy(mockStorage, 'setItem');
      const titles = JSON.stringify([
        { name: 'title-1' },
        { name: 'title-2' },
        { name: 'title-3' },
        { name: 'title-4' }
      ]);

      subject.getTitles()
        .then(() => {
          expect(setItemSpy.calledOnce).to.equal(true);
          expect(setItemSpy.args[0][0]).to.equal('zeldahunter:titles');
          expect(setItemSpy.args[0][1]).to.equal(titles);
          done();
        })
        .catch(error => done(error));
    });
  });
});
import { expect } from 'chai';
import ProgressService from './progress-service';
import fetchMock from 'fetch-mock';
import deepEqual from 'deep-equal';
import sinon from 'sinon';

describe('ProgressService', () => {
  let progressService; 

  describe('getProgress', () => {
    let mockStore;
    beforeEach(() => {
      mockStore = {
        getItem: () => {
          return JSON.stringify([
            {
              id: 'progress-1',
              titleId: 'title-id',
              playthroughId: 'playthrough-id',
              progress: {}
            }
          ]);
        }
      };      
      
      progressService = new ProgressService(mockStore);
    });
    
    it('returns all the progress saved in localStorage', (done) => {
      const expected = {
        id: 'progress-1',
        titleId: 'title-id',
        playthroughId: 'playthrough-id',
        progress: {}
      };

      progressService.getProgress()
        .then(progress => {
          expect(progress.length).to.equal(1);
          expect(progress[0]).to.deep.equal(expected);
          done();
        });
    });
  });

  describe('startProgressForTitle', () => {
    let collectables;
    let mockStore;
    beforeEach(() => {
      collectables = {
        bottles: []
      };

      mockStore = {
        getItem: () => {
          return JSON.stringify([]);
        },
        setItem: () => {
          return;
        }
      };
      
      fetchMock.get(`${process.env.ZH_PROGRESS_ENDPOINT}/the-title`, collectables);
      fetchMock.get(`${process.env.ZH_PROGRESS_ENDPOINT}/undefined`, 404);

      progressService = new ProgressService(mockStore);  
    });

    afterEach(() => {
      fetchMock.restore();
    });

    it('creates a new progress object', (done) => {
      const expected = {
        id: 'progress-1',
        titleId: 'the-title',
        playthroughId: 'the-playthrough',
        collectables
      };
      
      progressService.startProgressForTitle('the-title', 'the-playthrough')
        .then(progress => {
          expect(deepEqual(progress, expected)).to.equal(true);
          done();
        });
    });

    it('adds the new progress object to localstorage', (done) => {
      const setItemSpy = sinon.spy(mockStore, 'setItem');
      const expected = JSON.stringify([{
        id: 'progress-1',
        titleId: 'the-title',
        playthroughId: 'the-playthrough',
        collectables
      }]);

      progressService.startProgressForTitle('the-title', 'the-playthrough')
        .then(() => {
          expect(setItemSpy.calledOnce).to.equal(true);
          expect(setItemSpy.args[0][0]).to.equal('zeldahunter:progress');
          expect(setItemSpy.args[0][1]).to.equal(expected);
          done();
        });
    });

    it('returns an error if an invalid title id is passed in', (done) => {
      progressService.startProgressForTitle()
        .catch(error => {
          expect(error.message).to.equal('Invalid titleId');
          done();
        });
    });

    it('returns an error if an invalid playthrough id is passed in', (done) => {
      progressService.startProgressForTitle('the-title')
        .catch(error => {
          expect(error.message).to.equal('Invalid playthroughId');
          done();
        });
    });
  });
});
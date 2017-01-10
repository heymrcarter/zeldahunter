import { expect } from 'chai';
import PlaythroughService from './playthrough-service';

function mock() {
  return {
    getItem: function () {
      return JSON.stringify([
        {
          id: 1,
          name: 'playthrough-1',
          title: 'title-1'
        },
        {
          id: 2,
          name: 'playthrough-2',
          title: 'title-2'
        }
      ]);
    },
    setItem: function () {
      return;
    }
  }
}

describe('PlaythroughService', () => {
  describe('getPlaythroughsForTitle', () => {
    let playthroughService;
    beforeEach(() => {
      playthroughService = new PlaythroughService(mock());
    });

    it('returns all the playthroughs associated with a given title', () => {
      playthroughService.getPlaythroughsForTitle('title-1')
        .then(playthroughs => {
          expect(playthroughs.length).to.equal(1);
          expect(playthroughs[0]).to.deep.equal({
            id: 1,
            name: 'playthrough-1',
            title: 'title-1'
          });
        });      
    });
  });

  describe('addPlaythrough', () => {
    let playthroughService;
    beforeEach(() => {
      playthroughService = new PlaythroughService(mock());
    });

    it('returns an array of playthroughs with a new playthrough added', () => {
      const newPlaythrough = {
        id: 3,
        name: 'playthrough-3',
        title: 'title-3'
      };
      
      playthroughService.addPlaythrough(newPlaythrough)
        .then(playthrough => {
          expect(playthrough).to.deep.equal(newPlaythrough);
        });
    });
  });
});
import { expect } from 'chai';
import sinon from 'sinon';
import PlaythroughService, { generateId } from './playthrough-service';

describe('playthroughService', () => {
  let mockStore;
  let playthroughService;

  describe('getPlaythroughs', () => {
    beforeEach(() => {
      mockStore = {
        getItem: function () {
          return JSON.stringify([
            {
              id: 1,
              name: 'playthrough-1',
              progress: [],
              titleId: 'title-1'
            },
            {
              id: 2,
              name: 'playthrough-2',
              progress: [],
              titleId: 'title-2'
            }
          ]);
        }
      };
      
      playthroughService = new PlaythroughService(mockStore);
    });

    it('returns all the saved playthroughs', () => {
      const expected = [              
        {
          id: 1,
          name: 'playthrough-1',
          progress: [],
          titleId: 'title-1'
        },
        {
          id: 2,
          name: 'playthrough-2',
          progress: [],
          titleId: 'title-2'
        }
      ];
      
      playthroughService.getPlaythroughs()
        .then((playthroughs) => {
          expect(playthroughs.length).to.equal(2);
          expect(playthroughs).to.deep.equal(expected);
        });
    });
  });

  describe('getPlaythroughsForTitle', () => {
    let mockStore;
    let playthroughService;

    beforeEach(() => {
      mockStore = {
        getItem: function () {
          return JSON.stringify([
            {
              id: 1,
              name: 'playthrough-1',
              progress: [],
              titleId: 'title-1'
            },
            {
              id: 2,
              name: 'playthrough-2',
              progress: [],
              titleId: 'title-2'
            },
            {
              id: 3,
              name: 'playthrough-3',
              progress: [],
              titleId: 'title-3'
            }
          ]);
        }
      };

      playthroughService = new PlaythroughService(mockStore);
    });

    it('returns only the playthroughs associated with a title', () => {
      const expected = [{
        id: 1,
        name: 'playthrough-1',
        progress: [],
        titleId: 'title-1'
      }];

      playthroughService.getPlaythroughsByTitle('title-1')
        .then(playthroughs => {
          expect(playthroughs).to.deep.equal(expected);
        });
    });
  });

  describe('getPlaythrough', () => {
    let mockStore;
    let playthroughService;

    beforeEach(() => {
      mockStore = {
        getItem: function () {
          return JSON.stringify([
            {
              id: 1,
              name: 'playthrough-1',
              progress: [],
              titleId: 'title-1'
            },
            {
              id: 2,
              name: 'playthrough-2',
              progress: [],
              titleId: 'title-2'
            },
            {
              id: 3,
              name: 'playthrough-3',
              progress: [],
              titleId: 'title-3'
            }
          ]);
        }
      };

      playthroughService = new PlaythroughService(mockStore);
    });

    it('returns playthroughs by id', () => {
      const expected = {
        id: 1,
        name: 'playthrough-1',
        progress: [],
        titleId: 'title-1'
      };

      playthroughService.getPlaythrough(1)
        .then(playthrough => {
          expect(playthrough).to.deep.equal(expected);
        });
    });
  });

  describe('savePlaythrough', () => {
    let validator;

    beforeEach(() => {
      mockStore = {
        getItem: () => {
          return JSON.stringify([]);
        },
        setItem: () => {
          return;
        }
      };    
      
      validator = {
        validate: () => {
          return true;
        }
      };
      
      playthroughService = new PlaythroughService(mockStore, validator);
    });

    it('gets the current saved playthroughs', () => {
      const getItemSpy = sinon.spy(mockStore, 'getItem');

      playthroughService.savePlaythrough({});

      expect(getItemSpy.calledOnce).to.equal(true);
    });

    it('validates the playthrough', () => {
      const validateSpy = sinon.spy(validator, 'validate');

      playthroughService.savePlaythrough({});

      expect(validateSpy.calledOnce).to.equal(true);
    });

    it('saves the playthrough and returns it', () => {
      const setItemSpy = sinon.spy(mockStore, 'setItem');
      const newPlaythrough = {
        id: 1,
        name: 'playthrough',
        progress: [],
        titleId: 'title-id',
      };
      
      const expectedPlaythrough = {
        id: 1,
        name: 'playthrough',
        progress: [],
        titleId: 'title-id',
        lastUpdated: Date.now()
      };

      playthroughService.savePlaythrough(newPlaythrough)
        .then(playthrough => {
          expect(setItemSpy.calledOnce).to.equal(true);
          expect(playthrough).to.deep.equal(expectedPlaythrough);
        });
    });

    it('give an error when validation failed', () => {
      const validateStub = sinon.stub(validator, 'validate', () => { return false; });

      playthroughService.savePlaythrough({})
        .then()
        .catch(error => {
          expect(validateStub.calledOnce).to.equal(true);
          expect(error).to.equal('Invalid playthrough');
        });
    });
  });

  describe('deletePlaythrough', () => {
    let validator;

    beforeEach(() => {
      mockStore = {
        getItem: () => {
          return JSON.stringify([
            {
              id: 1,
              name: 'playthrough-1'
            },
            {
              id: 2,
              name: 'playthrough-2'
            }
          ]);
        },
        setItem: () => {
          return;
        }
      };

      validator = {
        validate: () => { return true; }
      };

      playthroughService = new PlaythroughService(mockStore, validator);
    });

    it('deletes the playthrough and returns the deleted playthrough', (done) => {
      const setItemSpy = sinon.spy(mockStore, 'setItem');
      const playthroughToDelete = {
        id: 1,
        name: 'playthrough-1'
      };
      
      playthroughService.deletePlaythrough(playthroughToDelete.id)
        .then(deletedPlaythrough => {
          expect(setItemSpy.calledOnce).to.equal(true);
          expect(deletedPlaythrough).to.deep.equal(playthroughToDelete);
          done();
        });
    });
  });
});
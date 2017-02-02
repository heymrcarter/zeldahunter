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

  describe('generateId', () => {
    it('returns a number', () => {
      const actual = generateId();
      expect(actual).to.be.a('number');
    });

    it('expects to be passed an array', () => {
      const fn = () => {};
      const obj = {};
      expect(generateId([])).to.equal(1);
      expect(generateId('a string')).to.be.an.instanceof(TypeError);
      expect(generateId(1)).to.be.an.instanceof(TypeError);
      expect(generateId(obj)).to.be.an.instanceof(TypeError);
      expect(generateId(fn)).to.be.an.instanceof(TypeError);
      expect(generateId(Date.now())).to.be.an.instanceof(TypeError);
    });

    it('returns 1 plus the length of the input array', () => {
      expect(generateId([])).to.equal(1);
      expect(generateId([1, 2])).to.equal(3);
      expect(generateId([1,2,3,4,5,6,7,8,9])).to.equal(10);
    });
  });
});
import { expect } from 'chai';
import extractIds from './id-extractor';

describe('extractIds', () => {
  it('expects an array ', () => {
    expect(extractIds.bind(extractIds, [])).to.not.throw(TypeError);
    expect(extractIds.bind(extractIds, 'a string')).to.throw(TypeError);
    expect(extractIds.bind(extractIds, 3)).to.throw(TypeError);
    expect(extractIds.bind(extractIds, true)).to.throw(TypeError);
    expect(extractIds.bind(extractIds, () => {})).to.throw(TypeError);
    expect(extractIds.bind(extractIds, {})).to.throw(TypeError);
  });

  it('returns an array', () => {
    expect(extractIds([])).to.be.an.instanceof(Array);
  });

  it('returns an array containing all the id property values of the objects in the array', () => {
    const expected = [1, 2, 3];
    const input = [{ id: 1 }, { id: 2, }, { id: 3 }];
    expect(extractIds(input)).to.deep.equal(expected);
  });

  it('filters out items in the collection that are not objects with id properties', () => {
    const expected = [1];
    const input = [{ id: 1 }, 'a string', true, {}, 5, () => {}, ];
    expect(extractIds(input)).to.deep.equal(expected);
  });

  it('filters out objects with ids that are not numbers', () => {
    const expected = [1, 4];
    const input = [{ id: 1 }, { id: 'a-string' }, { id: true }, { id: 4 }, { id: {} }, { id: () => {} }];
    expect(extractIds(input)).to.deep.equal(expected);
  });
});
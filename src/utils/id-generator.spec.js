import { expect } from 'chai';
import { generateId } from './id-generator';

describe('generateId', () => {
  it('returns a number', () => {
    const actual = generateId();
    expect(actual).to.be.a('number');
  });

  it('expects to be passed an array', () => {
    const fn = () => {};
    const obj = {};
    expect(generateId([])).to.equal(1);
    expect(generateId.bind(generateId, 'a string')).to.throw(TypeError);
    expect(generateId.bind(generateId, 1)).to.throw(TypeError);
    expect(generateId.bind(generateId, obj)).to.throw(TypeError);
    expect(generateId.bind(generateId, fn)).to.throw(TypeError);
    expect(generateId.bind(generateId, Date.now())).to.throw(TypeError);
  });

  it('expects the array to contain numbers', () => {
    expect(generateId([1,2,3,4,5])).to.equal(6);
    expect(generateId.bind(generateId, ['a', 'b', 'c'])).to.throw(TypeError);
    expect(generateId.bind(generateId, [5, 'a', () => {}])).to.throw(TypeError);
    expect(generateId.bind(generateId, [true, false, 34])).to.throw(TypeError);
    expect(generateId.bind(generateId, [{}, {}])).to.throw(TypeError);
  });

  it('should not return duplicate ids', () => {
    const arr = [1, 3];
    expect(generateId(arr)).to.not.equal(3);
  });

  it('returns 1 plus the highest id', () => {
    const arr = [1, 3];
    expect(generateId(arr)).to.equal(4);
  });
});
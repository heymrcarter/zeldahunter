import { expect } from 'chai';
import idToName from './id-to-name';

describe('idToName', () => {
  it('capitolizes the first character in the id', () => {
    expect(idToName('the-id').substr(0, 1)).to.equal('T');
    expect(idToName('my-id').substr(0, 1)).to.equal('M');
  });

  it('replaces dashes (-) with a space', () => {
    expect(idToName('the-id').substr(3, 1)).to.equal(' ');
  });

  it('capitolizes any characters after a space', () => {
    expect(idToName('the-id')).to.equal('The Id');
  });

  it('inserts a space between a lower case and upper case character', () => {
    expect(idToName('camelCasedId')).to.equal('Camel Cased Id');
  });
});
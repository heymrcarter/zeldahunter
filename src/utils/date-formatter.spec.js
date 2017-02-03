import { expect } from 'chai';
import dateFormatter from './date-formatter';

describe('dateFormatter', () => {
  it('formats dates in the xm/xd/yyyy format', () => {
    const date = new Date(2015, 0, 1,);
    expect(dateFormatter(date)).to.equal('1/1/2015');
  });
});
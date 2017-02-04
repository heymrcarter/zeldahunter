import { expect } from 'chai';
import toQuickview from './quickview-factory';

describe('toQuickview', () => {
  it('turns raw progress data into a quickview model', () => {
    const input = {
      camelCaseThing1: [
        { found: true },
        { found: false },
        { found: false }
      ],
      camelCaseThing2: [
        { found: true },
        { found: true },
        { found: true }
      ]
    };

    const expected = [
      { name: 'Camel Case Thing1', total: 3, found: 1 },
      { name: 'Camel Case Thing2', total: 3, found: 3 }
    ];

    expect(toQuickview(input)).to.deep.equal(expected);
  });
});
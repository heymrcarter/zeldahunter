import { expect } from 'chai';
import toQuickview from './quickview-factory';

describe('toQuickview', () => {
  it('turns raw progress data into a quickview model', () => {
    const input = {
      collectable1: [
        { found: true },
        { found: false },
        { found: false }
      ],
      collectable2: [
        { found: true },
        { found: true },
        { found: true }
      ]
    };

    const expected = [
      { name: 'Collectable1', total: 3, found: 1 },
      { name: 'Collectable2', total: 3, found: 3 }
    ];

    expect(toQuickview(input)).to.deep.equal(expected);
  });
});
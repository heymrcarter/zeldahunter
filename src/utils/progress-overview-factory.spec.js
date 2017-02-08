import { expect } from 'chai';
import toProgressOverview from './progress-overview-factory';

describe('toProgressOverview', () => {
  it('transforms progress data into a progress overview model', () => {
    const expected = [
      {
        name: 'Items',
        progress: [
          { name: 'Item 1', found: true },
          { name: 'Item 2', found: false }
        ]
      },
      {
        name: 'Other Items',
        progress: [
          { name: 'Thing 1', found: true },
          { name: 'Thing 2', found: true },
          { name: 'Thing 3', found: true }
        ]
      }
    ];

    const rawProgress = {
      items: [
        { id: 'item-1', found: true },
        { id: 'item-2', found: false }
      ],
      otherItems: [
        { id: 'thing-1', found: true },
        { id: 'thing-2', found: true },
        { id: 'thing-3', found: true }
      ]
    };

    expect(toProgressOverview(rawProgress)).to.deep.equal(expected);
  });

  it('skips transforming progress data that is not contained in an array', () => {
    const progress = {
      items: [
        { id: 'item-1', found: true },
        { id: 'item-2', found: false }
      ],
      nonArrayProgress: 3
    };

    expect(toProgressOverview.bind(toProgressOverview, progress)).to.not.throw(TypeError);
  });
});
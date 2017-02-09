import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CollectableSelector from './CollectableSelector';

function setup(customProps) {
  const defaultProps = {
    collectables: []
  };

  const props = Object.assign({}, defaultProps, customProps);

  return shallow(<CollectableSelector {...props} />);
}

describe('CollectableSelector', () => {
  it('renders a collectable tile for each collectable', () => {
    const collectables = [
      { name: 'Item 1', total: 4, found: 1 },
      { name: 'Item 2', total: 4, found: 0 }
    ];

    const wrapper = setup({ collectables });

    expect(wrapper.find('.collectable-selector li').length).to.equal(2);
  });

  it('renders the collectable name', () => {
    const collectables = [
      { name: 'Collectable' }
    ];

    const wrapper = setup({collectables});

    expect(wrapper.find('.glance-name').text()).to.equal('Collectable');
  });

  it('renders the collectable completion percentage', () => {
    const collectables = [
      { total: 5, found: 1 }
    ];

    const wrapper = setup({ collectables });

    expect(wrapper.find('.percentage').text()).to.equal('20%');
  });
});
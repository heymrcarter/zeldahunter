import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Quickview from './Quickview';

function setup(customProps) {
  const defaultProps = {
    quickviewModel: []
  }

  const props = Object.assign({}, defaultProps, customProps);

  return shallow(<Quickview {...props} />);
}

describe('Quickview', () => {
  it('renders a tile for each collectable in the model', () => {
    const collectables = [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' }
    ]

    const wrapper = setup({ quickviewModel: collectables });

    expect(wrapper.find('.quickview-glance').length).to.equal(3);
  });

  it('renders the collectable name', () => {
    const quickviewModel = [
      { name: 'Item 1' }
    ];

    const wrapper = setup({ quickviewModel });

    expect(wrapper.find('.glance-collectable').text()).to.equal('Item 1');
  });

  it('renders the collectable completion percentage', () => {
    const quickviewModel = [
      { found: 1, total: 4 }
    ];

    const wrapper = setup({ quickviewModel });

    expect(wrapper.find('.percentage').text()).to.equal('25%');
  });
});
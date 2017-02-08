import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import CollectableOverview from './CollectableOverview';

function setup(customProps) {
  const defaultProps = {
    collectable: {
      name: '',
      progress: []
    }
  };

  const props = Object.assign({}, defaultProps, customProps);

  return mount(<CollectableOverview {...props} />);
}

describe('CollectableOverview', () => {
  it('renders the collectable name as a link to the details', () => {
    const collectable = {
      name: 'Item 1',
      progress: []
    };

    const wrapper = setup({ collectable });

    expect(wrapper.find('.collectable-name a').text()).to.equal('Item 1');
  });

  it('renders a a list of each collectable item', () => {
    const collectable = {
      progress: [
        { name: 'Thing 1', found: true },
        { name: 'Thing 2', found: false }
      ]
    };

    const wrapper = setup({ collectable });

    expect(wrapper.find('.collectable-progress').length).to.equal(1);
    expect(wrapper.find('.collectable-progress li').length).to.equal(2);
  });

  it('renders a check icon if the item has been found', () => {
    const collectable = {
      progress: [
        { name: 'Things 1', found: true }
      ]
    };

    const wrapper = setup({ collectable });

    expect(wrapper.find('.found-icon').hasClass('glyphicon-ok')).to.equal(true);
  });

  it('renders the complete screen reader text', () => {
    const collectable = {
      progress: [
        { name: 'Things 1', found: true }
      ]
    };

    const wrapper = setup({ collectable });

    expect(wrapper.find('li .sr-only').text()).to.equal('Complete');
  });

  it('renders a x icon if the item has not been found', () => {
    const collectable = {
      progress: [
        { name: 'Things 1', found: false }
      ]
    };

    const wrapper = setup({ collectable });

    expect(wrapper.find('.found-icon').hasClass('glyphicon-remove')).to.equal(true);
  });

  it('renders the not complete screen reader text', () => {
    const collectable = {
      progress: [
        { name: 'Things 1', found: false }
      ]
    };

    const wrapper = setup({ collectable });

    expect(wrapper.find('li .sr-only').text()).to.equal('Not complete');
  });

  it('renders the item\'s name', () => {
    const collectable = {
      progress: [
        { name: 'Things 1', found: true }
      ]
    };

    const wrapper = setup({ collectable });

    expect(wrapper.find('.item-name').text()).to.equal('Things 1');
  });
});
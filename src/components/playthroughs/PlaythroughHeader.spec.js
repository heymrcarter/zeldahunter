import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import PlaythroughHeader from './PlaythroughHeader';

function setup() {
  const defaultProps = {
    title: { id: 'the-title', name: 'the-title' },
    lastUpdated: 'last-updated',
    playthroughName: 'the-playthrough',
    quickviewModel: []
  };

  return mount(<PlaythroughHeader {...defaultProps} />);
}

describe('PlaythroughHeader', () => {
  it('renders the playthrough name', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).to.equal('the-playthrough');
  });

  it('renders the last updated date', () => {
    const wrapper = setup();
    expect(wrapper.find('.last-updated').text()).to.equal('Last save: last-updated');
  });
});
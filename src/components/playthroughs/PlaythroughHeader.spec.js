import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PlaythroughHeader from './PlaythroughHeader';

function setup() {
  const defaultProps = {
    titleName: 'the-title',
    lastUpdated: 'last-updated',
    playthroughName: 'the-playthrough'
  };

  return shallow(<PlaythroughHeader {...defaultProps} />);
}

describe('PlaythroughHeader', () => {
  it('renders the playthrough name', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).to.equal('the-playthrough');
  });

  it('renders the title name', () => {
    const wrapper = setup();
    expect(wrapper.find('.title-name').text()).to.equal('the-title');
  });

  it('renders the last updated date', () => {
    const wrapper = setup();
    expect(wrapper.find('.last-updated').text()).to.equal('Last save: last-updated');
  });
});
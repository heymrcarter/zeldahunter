import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import HomePage from './HomePage';

describe('HomePage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<HomePage/>);
  });
  
  it('renders the heading', () => {
    expect(wrapper.find('h1').text()).to.equal(`It's dangerous to go alone!`);
  });

  it('has a link to the titles page', () => {
    expect(wrapper.find('.btn')).to.have.length(1);
  });
});
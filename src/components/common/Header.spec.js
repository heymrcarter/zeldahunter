import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Header titles={[]} />);
  });

  it('renders the logo', () => {
    expect(wrapper.find('.navbar-brand span').text()).to.equal('Zelda Hunter');
    expect(wrapper.find('.navbar-brand').children('img')).to.have.length(1);
  });

  it('renders a link to the titles page', () => {
    const link = wrapper.find('.dropdown-toggle');
    expect(link.text().trim()).to.equal('Titles');
  });
});
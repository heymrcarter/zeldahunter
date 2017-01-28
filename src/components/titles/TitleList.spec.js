import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import TitleList from './TitleList';

function setup(customProps = {}) {
  const defaultProps = {
    titles: [],
    css: ''
  };

  const props = Object.assign({}, defaultProps, customProps);

  return mount(<TitleList {...props} />);
}

describe('TitleList', () => {
  it('renders a list of titles', () => {
    const titles = [
      { name: 'title-1' },
      { name: 'title-2' },
      { name: 'title-3' }      
    ];

    const wrapper = setup({ titles });
    const links = wrapper.find('li a');

    expect(links).to.have.length(3);    

    links.map((link, i) => {
      expect(link.text()).to.equal(titles[i].name);
    });
  });

  it('adds a css class to the list', () => {
    const wrapper = setup({ css: 'test' });
    expect(wrapper.find('.test')).to.have.length(1);
  });
});
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TitleMetadata from './TitleMetadata';

function setup(customTitle = {}) {
  return shallow(<TitleMetadata title={customTitle} />);
}

describe('TitleMetadata', () => {
  it('renders the title name as a h1', () => {
    const wrapper = setup({ name: 'title' });
    expect(wrapper.find('h1').text()).to.equal('title');
  });

  it('renders the title description', () => {
    const wrapper = setup({ description: 'The title description' });
    expect(wrapper.find('p.title-description').text()).to.equal('The title description');
  });

  it(`renders the title's release date`, () => {
    const wrapper = setup({ releaseDate: '1/1/2017' });
    expect(wrapper.find('p.release-date').text()).to.equal('Released: 1/1/2017');
  });

  it('renders the title logo', () => {
    const wrapper = setup ({ logo: 'the-logo-url', name: 'title' });
    expect(wrapper.find('img').prop('src')).to.equal('the-logo-url');
    expect(wrapper.find('img').prop('alt')).to.equal('title');
  });
});
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TitleMetadata from './TitleMetadata';

function setup(customProps = {}) {
  const defaultProps = {
    title: {
      collectables: []
    }
  };

  const props = Object.assign({}, defaultProps, customProps);
  return shallow(<TitleMetadata {...props} />);
}

describe('TitleMetadata', () => {
  it('renders the title name as a h1', () => {
    const title = { name: 'title' };
    const wrapper = setup({ title });
    expect(wrapper.find('h1').text()).to.equal('title');
  });

  it('renders the title description', () => {
    const title = { description: 'The title description' };    
    const wrapper = setup({ title });
    expect(wrapper.find('p.title-description').text()).to.equal('The title description');
  });

  it(`renders the title's release date`, () => {
    const title = { releaseDate: '1/1/2017' };
    const wrapper = setup({ title });
    expect(wrapper.find('p.release-date').text()).to.equal('Released: 1/1/2017');
  });

  it('renders the title logo', () => {
    const title = { name: 'title', logo: 'the-logo-url' };
    const wrapper = setup ({ title });
    expect(wrapper.find('img').prop('src')).to.equal('the-logo-url');
    expect(wrapper.find('img').prop('alt')).to.equal('title');
  });
});
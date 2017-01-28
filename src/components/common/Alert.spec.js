import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Alert from './Alert';

function setup(customProps = {}) {
  const defaultProps = {
    type: 'success',
    children: [],
    dismissable: true
  };

  const props = Object.assign({}, defaultProps, customProps);

  return shallow(<Alert {...props} />);
}

describe('Alert', () => {
  it('sets the style based on the type prop', () => {
    ['success', 'info', 'warning', 'danger'].map(type => {
      const wrapper = setup({ type });
      expect(wrapper.prop('className')).to.equal(`alert alert-${type}`);
    });
  });

  it('renders a dismiss button when dismissable', () => {
    const wrapper = setup({ dismissable: true });
    expect(wrapper.find('button')).to.have.length(1);
  });

  it(`doesn't render a dismiss button`, () => {
    const wrapper = setup({ dismissable: false });
    expect(wrapper.find('button')).to.have.length(0);
  });

  it('renders content in the alert', () => {
    const content = [(<p key={1} id="content">The content</p>)];
    const wrapper = setup({ children: content });

    expect(wrapper.find('#content')).to.have.length(1);
    expect(wrapper.find('#content').text()).to.equal('The content');
  });
});
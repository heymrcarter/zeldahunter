import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PlaythroughForm from './PlaythroughForm';
import sinon from 'sinon';

function setup(customProps = {}) {
  const defaultProps = {
    changeHandler: () => {},
    submitHandler: () => {},
    position: '1',
    cancelHandler: () => {}
  };

  const props = Object.assign({}, defaultProps, customProps);

  return shallow(<PlaythroughForm {...props} />);
}

describe('PlaythroughForm', () => {
  it('adds the slot number to the form', () => {
    const wrapper = setup({ position: '1' });
    const form = wrapper.find('form');
    expect(form.prop('data-position')).to.equal('1');
  });

  it('handles form submissions', () => {
    const handler = sinon.spy();
    const wrapper = setup({ submitHandler: handler });

    wrapper.find('form').simulate('submit');

    expect(handler.calledOnce).to.equal(true);
  });

  it('handles clicks on the cancel button', () => {
    const handler = sinon.spy();
    const wrapper = setup({ cancelHandler: handler });

    wrapper.find('.cancel-playthrough').simulate('click');

    expect(handler.calledOnce).to.equal(true);
  });

  it('handles user input in the name field', () => {
    const handler = sinon.spy();
    const wrapper = setup({ changeHandler: handler });

    wrapper.find('#playthrough-name').simulate('change');

    expect(handler.calledOnce).to.equal(true);
  });
});
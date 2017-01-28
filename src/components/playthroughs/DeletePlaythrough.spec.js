import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import DeletePlaythrough from './DeletePlaythrough';

function setup(customProps = {}) {
  const defaultProps = {
    playthrough: {},
    position: '1',
    deleteHandler: () => {},
    changeHandler: () => {},
    isValid: true,
    cancelHandler: () => {}
  };

  const props = Object.assign({}, defaultProps, customProps);

  return shallow(<DeletePlaythrough {...props} />);
}

function createSpyForHandler(event) {
  const props = {};
  const mock = spy();
  props[event] = mock;

  return {
    spy: mock,
    props
  };
}

describe('DeletePlaythrough', () => {
  it('renders the warning', () => {
    const wrapper = setup();
    expect(wrapper.find('.lead').text()).to.equal('Are you sure?');
  });

  it('renders the slot number', () => {
    const wrapper = setup();
    expect(wrapper.find('form').prop('data-position')).to.equal('1');
  });

  it('handles form submission', () => {
    const { spy, props } = createSpyForHandler('deleteHandler');
    const wrapper = setup(props);

    wrapper.find('form').simulate('submit');

    expect(spy.calledOnce).to.equal(true);
  });

  it('renders the id of the playthrough to be deleted', () => {
    const wrapper = setup({ playthrough: { id: 1 } });
    expect(wrapper.find('form').prop('data-playthrough-id')).to.equal(1);
  });

  it('handles text input into the name field', () => {
    const { spy, props } = createSpyForHandler('changeHandler');
    const wrapper = setup(props);

    wrapper.find('#playthrough-name').simulate('keyup');

    expect(spy.calledOnce).to.equal(true);
  });

  it('handles clicks on the cancel button', () => {
    const { spy, props } = createSpyForHandler('cancelDelete');
    const wrapper = setup(props);

    wrapper.find('.cancel-delete').simulate('click');

    expect(spy.calledOnce).to.equal(true);
  });

  it('renders the check mark icon when valid', () => {
    const wrapper = setup({ isValid: true });
    expect(wrapper.find('input.valid').length).to.equal(1);
    expect(wrapper.find('span.valid').prop('className')).to.equal('glyphicon glyphicon-ok valid');
  });

  it('renders the x icon when invalid', () => {
    const wrapper = setup({ isValid: false });
    expect(wrapper.find('input.invalid').length).to.equal(1);
    expect(wrapper.find('span.invalid').prop('className')).to.equal('glyphicon glyphicon-remove invalid');
  });
});
import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Playthrough from './Playthough';
import sinon from 'sinon';

function setup(userProps) {
  const defaultProps = {
    playthrough: {
      name: 'playthrough-1',
      lastUpdated: Date.now()
    },
    startDeletePlaythrough: () => {},
    position: "1"
  };

  const props = Object.assign({}, defaultProps, userProps);

  return shallow(<Playthrough {...props} />);
}

describe('Playthrough', () => {
  it('renders the playthrough name and last save date', () => {
    const date = Date.now();    
    const wrapper = setup(date);
    const formattedDate = (value) => {
      const date = new Date(value);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();

      return `${month}/${day}/${year}`;
    };

    expect(wrapper.find('h3').text()).to.equal('playthrough-1');
    expect(wrapper.find('.playthrough-body').text()).to.equal(`Last save: ${formattedDate(date)}`);
  });

  it('handles clicks on the delete icon', () => {
    const handler = sinon.spy();
    const wrapper = setup({ startDeletePlaythrough: handler });

    wrapper.find('.delete-playthrough').simulate('click');

    expect(handler.calledOnce).to.equal(true);
  });
});
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProgressOverview from './ProgressOverview';

function setup() {
  const defaultProps = {
    progress: []
  };

  return shallow(<ProgressOverview {...defaultProps} />);
}

describe('ProgressOverview', () => {
  it('renders the progress overview', () => {
    const wrapper = setup();
    expect(wrapper.find('.progress-overview').length).to.equal(1);
  });
});
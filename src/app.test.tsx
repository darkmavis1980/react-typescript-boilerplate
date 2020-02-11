import * as React from 'react';
import { mount } from 'enzyme';
import App from './app';

const wrapper = mount(<App name='steve' />);

describe('App', () => {
  it('should contain the appropriate content', () => {
    expect(wrapper.html()).toContain('Hello steve');
  })
});
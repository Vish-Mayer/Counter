import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders title of application', () => {
    expect(wrapper.find("h1").text()).toContain("Counter Application")
  });

  test('renders a button with text "Up"', () => {
    expect(wrapper.find("#up-btn").text()).toBe("Up")
  })

  test('renders a button with text "Down"', () => {
    expect(wrapper.find("#down-btn").text()).toBe("Down")
  })

  test('renders the intial number of state in div', () => {
    expect(wrapper.find("#number").text()).toBe("0")
  })

  test('render the click event for "up button" and increase number by 1', () => {
    wrapper.find('#up-btn').simulate('click')
    expect(wrapper.find('#number').text()).toBe("1")
  })

  test('render the click event for "down button" and decrease number by 1', () => {
    wrapper.find('#up-btn').simulate('click')
    expect(wrapper.find('#number').text()).toBe("1")
    wrapper.find('#down-btn').simulate('click')
    expect(wrapper.find('#number').text()).toBe("0")
  })
  test('click event for "down button" is diabled when number is 0', () => {
    wrapper.find('#down-btn').simulate('click')
    expect(wrapper.find('#number').text()).toBe("0")
  })
});


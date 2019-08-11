import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ItemsList from '../ItemsList';

const mockedItem = {
  brand: {
    image: 'test',
  },
  image: 'test',
  reward: 'test',
  title: 'test',
};
const mockStore = configureStore();

describe('basic rendering tests', () => {
  it('renders proper items amount with data in store', () => {
    const store = mockStore({ items: [mockedItem] });
    const wrapper = mount(<Provider store={store}><ItemsList /></Provider>);
    expect(wrapper.find('.marketplace-item').length).toBe(1);
  });
  it('renders proper items amount with empty store', () => {
    const store = mockStore([]);
    const wrapper = mount(<Provider store={store}><ItemsList /></Provider>);
    expect(wrapper.find('.marketplace-item').length).toBe(0);
  });
});

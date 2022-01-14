import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render my component', () => {
    const component = shallow(<App />);
    expect(component.getElements()).toMatchSnapshot();
  });
});

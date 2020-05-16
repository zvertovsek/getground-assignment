import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { App, Body, Header } from '~/Components';

describe('App Component', () => {
  let Component: ShallowWrapper;
  beforeEach(() => {
    Component = shallow(<App />);
  });
  
  it('renders Header Container', () => {
    expect(Component.find(Header).length).toEqual(1);
  });

  it('renders Body Container', () => {
    expect(Component.find(Body).length).toEqual(1);
  });

});



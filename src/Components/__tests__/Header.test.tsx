import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header, Menu } from '~/Components';
import { CompanyLogo, SaveAndExitButton } from '~/Styling';

describe('Header Component', () => {
  let Component: ShallowWrapper;
  beforeEach(() => {
    Component = shallow(<Header />);
  });

  it('renders the Company Logo', () => {
    expect(Component.find(CompanyLogo).length).toEqual(1);
  });

  it('renders the Menu Component', () => {
    expect(Component.find(Menu).length).toEqual(1);
  });

  it('renders the SaveAndClose Button', () => {
    expect(Component.find(SaveAndExitButton).length).toEqual(1);
  });

  // if there is no changes the button should be disabled
  // if changes are made the button should become enabled
  // if clicked the redux state is submited to the server 
});

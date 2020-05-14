import React from 'react';
import { shallow } from 'enzyme';
import { findByTestId } from './Utilities/TestUtilities';

import App from './App';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const rootComponent = findByTestId(wrapper, 'application');

  expect(rootComponent.length).toBe(1);
});

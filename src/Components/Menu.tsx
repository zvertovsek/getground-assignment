import React from 'react';
import { Menu, MenuItem } from '~/Styling/Elements';

const Component: React.FC = () => {
  return (
    <Menu>
      <MenuItem>What we do</MenuItem>
      <MenuItem>Advantages</MenuItem>
      <MenuItem>Pricing</MenuItem>
      <MenuItem>How it works</MenuItem>
    </Menu>
  );
}

export default Component;

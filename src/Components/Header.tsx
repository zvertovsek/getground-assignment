import React from 'react';
import { HeaderContainer } from '~/Styling/Layout';
import { CompanyLogo } from '~/Styling/Elements';
import { SaveAndExitButton } from '~/Styling/Buttons';
import { Menu } from '~/Components';

const Component: React.FC = () => {
  return (
    <HeaderContainer>
      <div className='InnerWrapper'>
        <CompanyLogo />
        <Menu />
        <SaveAndExitButton onClick={(e) => console.log("Clicked")}>Save and Exit</SaveAndExitButton>
      </div>
    </HeaderContainer>
  );
}

export default Component;

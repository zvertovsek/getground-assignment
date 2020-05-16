import React from 'react';
import { H1, HighlightedParagraph } from '~/Styling/Fonts';
import { ShareholderForm, PageNavigation } from '~/Components';
import { Pages } from './Metadata';

const Container: React.FC = () => {
  return (
    <div className="InnerWrapper">
      <H1>Shareholder Details</H1>
      <HighlightedParagraph>
        You can have a maximum of 8 shareholders (including you). All shareholders need to be people not companies. 
        <br /><br />
        Please note that each of your shareholders will need to create an account on getGround. They must also be over 18.
      </HighlightedParagraph>
      <ShareholderForm />
      <ShareholderForm />
      <PageNavigation pages={Pages} currentPageIndex={0} />
    </div>
  );
}

export default Container;

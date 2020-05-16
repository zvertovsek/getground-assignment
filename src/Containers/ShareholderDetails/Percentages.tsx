import React from 'react';
import { H1, HighlightedParagraph } from '~/Styling/Fonts';
import { PageNavigation } from '~/Components';
import { Pages } from './Metadata';

const Container: React.FC = () => {
  return (
    <div className="InnerWrapper">
      <H1>Shareholder Details</H1>
      <HighlightedParagraph>
        Now it is time to divide company shares between your shareholders and specify which shareholders are directors.
      </HighlightedParagraph>

      <PageNavigation pages={Pages} currentPageIndex={1} />
    </div>
  );
}

export default Container;

import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { H1, HighlightedParagraph } from '~/Styling/Fonts';
import { PageNavigation, PercentagesGrid } from '~/Components';
import { Pages } from './Metadata';
import { ShareholdersActions } from '~/Store/Actions';
import { getShareholders } from '~/Store/Selectors';
import { IShareholder } from '~/Entities';


const Container: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const shareholders: IShareholder[] = useSelector(getShareholders);

  const onChangeShareholderShare = React.useCallback(
    (data: IShareholder) => dispatch(ShareholdersActions.editShareholder(data)),
    [dispatch]
  );

  const onChangeDirector = React.useCallback(
    (id: string) => dispatch(ShareholdersActions.changeCompanyDirector(id)),
    [dispatch]
  );

  return (
    <div className="InnerWrapper">
      <H1>Shareholder Details</H1>
      <HighlightedParagraph>
        Now it is time to divide company shares between your shareholders and specify which shareholders are directors.
      </HighlightedParagraph>
      <PercentagesGrid 
        shareholders={shareholders} 
        onShareChange={onChangeShareholderShare}
        onCompanyDirectorChange={onChangeDirector} />
      <PageNavigation pages={Pages} currentPageIndex={1} />
    </div>
  );
}

export default Container;

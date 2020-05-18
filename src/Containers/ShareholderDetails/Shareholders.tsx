import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { H1, HighlightedParagraph } from '~/Styling/Fonts';
import { ShareholderForm, PageNavigation } from '~/Components';
import { Pages } from './Metadata';
import { ShareholdersActions } from '~/Store/Actions';
import { getShareholdersExcludingCreator } from '~/Store/Selectors';
import { IShareholder, DefaultShareholder } from '~/Entities';

const Container: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const shareholders: IShareholder[] = useSelector(getShareholdersExcludingCreator);

  const onAddShareholder = React.useCallback(
    (data: IShareholder) => dispatch(ShareholdersActions.addShareholder(data)),
    [dispatch]
  );

  const onEditShareholder = React.useCallback(
    (data: IShareholder) => dispatch(ShareholdersActions.editShareholder(data)),
    [dispatch]
  );

  function renderCurrentShareholders() {
    return shareholders.map((shareholder: IShareholder) => (
      <ShareholderForm
        key={shareholder.id}
        type='edit'
        shareholder={shareholder}
        onSubmit={onEditShareholder}
      />
    ));
  }

  function renderCreateShareholderForm() {
    if (shareholders.length === 7) {
      return null;
    } 
    return (
      <ShareholderForm
        type='create'
        shareholder={DefaultShareholder}
        onSubmit={onAddShareholder}
      />
    );
  }

  return (
    <div className="InnerWrapper">
      <H1>Shareholder Details</H1>
      <HighlightedParagraph>
        You can have a maximum of 8 shareholders (including you). All shareholders need to be people not companies.<br /><br />
        Please note that each of your shareholders will need to create an account on getGround. They must also be over 18.
      </HighlightedParagraph>
      {renderCurrentShareholders()}
      {renderCreateShareholderForm()}
      <PageNavigation pages={Pages} currentPageIndex={0} />
    </div>
  );
}

export default Container;

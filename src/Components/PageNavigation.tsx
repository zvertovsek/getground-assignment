import React from 'react';
import { useHistory } from 'react-router-dom';
import { CommonButton, CallToActionButton, PageNavigationContainer } from '~/Styling';

export interface IPageNavigationItem {
  id: string;
  path: string;
  title: string;
}

interface IProps {
  pages: IPageNavigationItem[];
  currentPageIndex: number;
}

const Component: React.FC<IProps> = ({ pages, currentPageIndex }) => {
  const history = useHistory();
  
  const backButtonProps = currentPageIndex === 0 ? {
    disabled: true
  } : {
    onClick: (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      history.push(pages[currentPageIndex-1].path);
    }
  };

  const nextButtonProps = currentPageIndex < pages.length - 1 ? {
    onClick: (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
      history.push(pages[currentPageIndex+1].path);
    }
  } : {
    disabled: true
  }
  
  return (
    <PageNavigationContainer>
      <CommonButton { ...backButtonProps }>Back</CommonButton>
      <CallToActionButton { ...nextButtonProps }>Next</CallToActionButton>
    </PageNavigationContainer>
  );
}

export default Component;

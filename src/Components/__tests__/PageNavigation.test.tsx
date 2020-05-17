import React from 'react';
import * as Router from 'react-router-dom';
import { mount, ReactWrapper } from 'enzyme';
import PageNavigation, { IPageNavigationItem } from '~/Components/PageNavigation';
import { CommonButton, CallToActionButton } from '~/Styling';

const pages: IPageNavigationItem[] = [
  { id: 'first', path: 'path-first', title: 'First' },
  { id: 'middle', path: 'path-middle', title: 'Middle' },
  { id: 'last', path: 'path-last', title: 'Last' }
]

describe('PageNavigation Component', () => {
  let Component: ReactWrapper;
  let mockLocation: any;
  let NextButton: ReactWrapper;
  let BackButton: ReactWrapper;
  
  const setup = (currentIndex: number) => {
    Component = mount(
      <Router.MemoryRouter initialEntries={[pages[currentIndex].path]}>
        <PageNavigation pages={pages} currentPageIndex={currentIndex} />
        <Router.Route
          path="*"
          render={({ location }) => {
            mockLocation = location;
            return null;
          }}
        />
      </Router.MemoryRouter>
    );
    NextButton = Component.find(CallToActionButton);
    BackButton = Component.find(CommonButton);
  }

  describe('on first page', () => {
    beforeEach(() => {
      setup(0);
    });

    it('renders back button disabled', () => {
      expect(BackButton.length).toEqual(1);
      expect(BackButton.prop('disabled')).toBeTruthy();
    });

    it('renders next button Enabled', () => {
      expect(NextButton.length).toEqual(1);
      expect(NextButton.prop('disabled')).toBeUndefined();
    });

    test('if next button is clicked, the correct path is passed into history push', () => {
      NextButton.simulate("click");
      expect(mockLocation.pathname).toBe(pages[1].path);
    })
  });

  describe('on middle page', () => {
    beforeEach(() => {
      setup(1);
    });

    it('render both buttons enabled', () => {
      expect(BackButton.length).toEqual(1);
      expect(BackButton.prop('disabled')).toBeUndefined();
      expect(NextButton.length).toEqual(1);
      expect(NextButton.prop('disabled')).toBeUndefined();
    });

    test('if next button is clicked, the correct path is passed into history push', () => {
      NextButton.simulate("click");
      expect(mockLocation.pathname).toBe(pages[2].path);
    });

    test('if back button is clicked, the correct path is passed into history push', () => {
      BackButton.simulate("click");
      expect(mockLocation.pathname).toBe(pages[0].path);
    });
  });

  describe('on last page', () => {
    beforeEach(() => {
      setup(2);
    });

    it('renders back button enabled', () => {
      expect(BackButton.length).toEqual(1);
      expect(BackButton.prop('disabled')).toBeUndefined();
    });

    it('renders next button disabled', () => {
      expect(NextButton.length).toEqual(1);
      expect(NextButton.prop('disabled')).toBeTruthy();
    });

    test('if back button is clicked, the correct path is passed into history push', () => {
      BackButton.simulate("click");
      expect(mockLocation.pathname).toBe(pages[1].path);
    });
  });
});

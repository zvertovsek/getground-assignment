import { createSelector } from 'reselect';
import { IStore } from '~/Store';
import { IShareholder } from '~/Entities';

export const getShareholders = (state: IStore) => state.Shareholders.data;

export const getShareholdersExcludingCreator = createSelector(
  getShareholders,
  (shareholders: IShareholder[]) => shareholders.filter((shareholder: IShareholder) => !shareholder.isCreator)
);

import { createAction } from 'redux-actions';
import { IShareholder } from '~/Entities';

export enum ShareholdersActionTypes {
  ADD_SHAREHOLDER = 'ADD_SHAREHOLDER'
};

export const ShareholdersActions = {
  addShareholder: createAction<IShareholder>(ShareholdersActionTypes.ADD_SHAREHOLDER)
}

export type ShareholdersActions = typeof ShareholdersActions;

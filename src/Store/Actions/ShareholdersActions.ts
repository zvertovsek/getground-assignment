import { createAction } from 'redux-actions';
import { IShareholder } from '~/Entities';

export enum ShareholdersActionTypes {
  ADD_SHAREHOLDER = 'ADD_SHAREHOLDER',
  ADD_SHAREHOLDER_START = 'ADD_SHAREHOLDER_START',
  ADD_SHAREHOLDER_SUCCESS = 'ADD_SHAREHOLDER_SUCCESS',

  EDIT_SHAREHOLDER = 'EDIT_SHAREHOLDER',
  EDIT_SHAREHOLDER_START = 'EDIT_SHAREHOLDER_START',
  EDIT_SHAREHOLDER_SUCCESS = 'EDIT_SHAREHOLDER_SUCCESS',

  CHANGE_COMPANY_DIRECTOR = 'CHANGE_COMPANY_DIRECTOR'
};

export const ShareholdersActions = {
  addShareholder: createAction<IShareholder>(ShareholdersActionTypes.ADD_SHAREHOLDER),
  addShareholderStart: createAction(ShareholdersActionTypes.ADD_SHAREHOLDER_START),
  addShareholderSuccess: createAction<IShareholder>(ShareholdersActionTypes.ADD_SHAREHOLDER_SUCCESS),

  editShareholder: createAction<IShareholder>(ShareholdersActionTypes.EDIT_SHAREHOLDER),
  editShareholderStart: createAction(ShareholdersActionTypes.EDIT_SHAREHOLDER_START),
  editShareholderSuccess: createAction<IShareholder[]>(ShareholdersActionTypes.EDIT_SHAREHOLDER_SUCCESS),

  changeCompanyDirector: createAction<string>(ShareholdersActionTypes.CHANGE_COMPANY_DIRECTOR)
}

export type ShareholdersActions = typeof ShareholdersActions;

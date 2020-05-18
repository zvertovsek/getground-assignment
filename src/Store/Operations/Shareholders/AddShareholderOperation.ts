import { v4 as uuid } from 'uuid';
import { put } from 'redux-saga/effects';
import { IAction } from '~/Store';
import { IShareholder } from '~/Entities';
import { ShareholdersActions } from '~/Store/Actions';

export function* addShareholder(action: IAction): IterableIterator<any> {
  yield put(ShareholdersActions.addShareholderStart());
  const newShareholder: IShareholder = action.payload;
  newShareholder.id = uuid();

  yield put (ShareholdersActions.addShareholderSuccess(newShareholder));
}

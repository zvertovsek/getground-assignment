import { SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { ShareholdersActionTypes } from '~/Store/Actions';

import { addShareholder } from './AddShareholderOperation';
import { editShareholder } from './EditShareholderOperation';
import { changeCompanyDirector } from './ChangeCompanyDirectorOperation';

export function* Listener(): SagaIterator {
  yield takeEvery(ShareholdersActionTypes.ADD_SHAREHOLDER, addShareholder);
  yield takeEvery(ShareholdersActionTypes.EDIT_SHAREHOLDER, editShareholder);
  yield takeEvery(ShareholdersActionTypes.CHANGE_COMPANY_DIRECTOR, changeCompanyDirector)
}
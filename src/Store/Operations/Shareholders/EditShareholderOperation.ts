import { put, select } from 'redux-saga/effects';
import { IAction } from '~/Store';
import { IShareholder } from '~/Entities';
import { getShareholders } from '~/Store/Selectors';
import { ShareholdersActions} from '~/Store/Actions';

export function* editShareholder(action: IAction): IterableIterator<any> {
  yield put(ShareholdersActions.editShareholderStart());
  
  const updatedShareholder: IShareholder = action.payload;
  const shareholders: any = yield select(getShareholders);
  
  const updatedData: IShareholder[] = shareholders.map((shareholder: IShareholder) => {
    return (shareholder.id === updatedShareholder.id) ? 
      updatedShareholder :
      shareholder;
  });

  yield put (ShareholdersActions.editShareholderSuccess(updatedData));
}

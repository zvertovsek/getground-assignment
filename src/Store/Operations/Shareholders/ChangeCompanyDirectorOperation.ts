import { put, select } from 'redux-saga/effects';
import { IAction } from '~/Store';
import { IShareholder } from '~/Entities';
import { getShareholders } from '~/Store/Selectors';
import { ShareholdersActions} from '~/Store/Actions';

export function* changeCompanyDirector(action: IAction): IterableIterator<any> {
  yield put(ShareholdersActions.editShareholderStart());
  
  const newDirectorId: string = action.payload;
  const shareholders: any = yield select(getShareholders);
  
  const updatedData: IShareholder[] = shareholders.map((shareholder: IShareholder): IShareholder => {
    return {
      ...shareholder,
      isDirector: shareholder.id === newDirectorId ? true : false 
    };
  });

  yield put (ShareholdersActions.editShareholderSuccess(updatedData));
}

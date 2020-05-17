import { handleActions } from 'redux-actions';
import { ShareholdersActionTypes } from '~/Store';
import { IShareHoldersStoreNode } from '../Interfaces';
// import { IShareholder } from '~/Entities';

export const initialState: IShareHoldersStoreNode = {
  data: [],
  info: {
    isInitialized: false,
    isLoading: false,
    hasChanges: false,
    hasErrors: false,
    errors: []
  },
  settings: {
    sharePercentageAutoCorrect: false
  }
};

export const ShareholdersReducer = handleActions<IShareHoldersStoreNode, any>({
  [ShareholdersActionTypes.ADD_SHAREHOLDER]: (state, action) => {
    return {
      ...state,
      data: [
        ...state.data,
        action.payload
      ]
    }
  }
}, initialState);

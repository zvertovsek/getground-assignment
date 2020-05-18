import { handleActions } from 'redux-actions';
import { v4 as uuid } from 'uuid';
import { ShareholdersActionTypes } from '~/Store/Actions';
import { IShareHoldersStoreNode } from '../Interfaces';
import { IShareholder } from '~/Entities';


const InitUser: IShareholder = {
  id: uuid(),
  firstName: 'John',
  lastName: 'Smith',
  email: 'john.smith@mail.com',
  share: 100,
  isCreator: true,
  isDirector: true
};

export const initialState: IShareHoldersStoreNode = {
  data: [InitUser],
  info: {
    isInitialized: false,
    isLoading: false,
    isProcessing: false,
    hasChanges: false,
    hasErrors: false,
    errors: []
  }
};

export const ShareholdersReducer = handleActions<IShareHoldersStoreNode, any>({
  [ShareholdersActionTypes.ADD_SHAREHOLDER_START]: (state, action) => {
    return {
      ...state,
      info: {
        ...state.info,
        isProcessing: true
      }
    }
  },
  [ShareholdersActionTypes.ADD_SHAREHOLDER_SUCCESS]: (state, action) => {
    return {
      ...state,
      data: [
        ...state.data,
        action.payload
      ],
      info: {
        ...state.info,
        isProcessing: false,
        hasChanges: true
      }
    }
  },
  [ShareholdersActionTypes.EDIT_SHAREHOLDER_START]: (state, action) => {
    return {
      ...state,
      info: {
        ...state.info,
        isProcessing: true
      }
    }
  },
  [ShareholdersActionTypes.EDIT_SHAREHOLDER_SUCCESS]: (state, action) => {
    return {
      ...state,
      data: [
        ...action.payload
      ],
      info: {
        ...state.info,
        isProcessing: false,
        hasChanges: true
      }
    }
  }
}, initialState);

import { handleActions } from 'redux-actions';
import { IShareHoldersStoreNode } from '../Interfaces';

const initialState: IShareHoldersStoreNode = {
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

const Reducer = handleActions({

}, initialState);

export default Reducer;
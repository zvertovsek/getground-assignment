import { combineReducers, Reducer } from 'redux'
import { IStore } from '../Interfaces';

import ShareholdersReducer from './ShareholdersReducer';

export const reducers: Reducer = combineReducers<IStore>({
  Shareholders: ShareholdersReducer
});
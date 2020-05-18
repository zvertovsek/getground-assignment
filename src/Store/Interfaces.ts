import { IShareholder } from '~/Entities';

type DataObject = object | Array<object>;

export interface IAction {
  type: string;
  payload?: any;
}

export interface IStoreProps {
  env: 'prod' | 'dev';
}

export const DefaultStoreProps: IStoreProps = {
  env: 'dev'
};

export interface IInfoProps {
  isLoading: boolean;
  isProcessing: boolean;
  isInitialized: boolean;
  hasChanges: boolean;
  hasErrors: boolean;
  errors: any[];
}

export interface IStoreNode<T extends DataObject> {
  data: T;
  info: IInfoProps;
}

export interface IShareHoldersStoreNode extends IStoreNode<IShareholder[]> {
  data: IShareholder[];
}


export interface IStore {
  Shareholders: IShareHoldersStoreNode;
}

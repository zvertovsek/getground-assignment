import { IShareholder } from '~/Entities';

type DataObject = object | Array<object>;

export interface IStoreProps {
  env: 'prod' | 'dev';
}

export const DefaultStoreProps: IStoreProps = {
  env: 'dev'
};

export interface IInfoProps {
  isLoading: boolean;
  isInitialized: boolean;
  hasChanges: boolean;
  hasErrors: boolean;
  errors: any[];
}

export interface IStoreNode<T extends DataObject> {
  data: T;
  info: IInfoProps;
  settings?: any;
}

export interface IShareHoldersStoreNode extends IStoreNode<IShareholder[]> {
  data: IShareholder[];
}


export interface IStore {
  Shareholders: IShareHoldersStoreNode;
}

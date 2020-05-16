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

export interface IShareHolder {
  firstName: string;
  lastName: string;
  email: string;
  share: number;
  isDirector: boolean;
}

export interface IShareHoldersStoreNode extends IStoreNode<IShareHolder[]> {
  data: IShareHolder[];
}

export interface IStoreNode<T extends DataObject> {
  data: T;
  info: IInfoProps;
  settings?: any;
}

export interface IStore {
  Shareholders: IShareHoldersStoreNode;
}

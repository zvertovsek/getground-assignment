import { createStore, Store } from 'redux';
import { setMiddleware } from './Middleware';
import { reducers } from './Reducers';
import { IStoreProps, DefaultStoreProps} from './Interfaces';

export default function storeCreator(props: IStoreProps = DefaultStoreProps): Store {
  const middleware = setMiddleware(props);
  const store = createStore(reducers, middleware);
  // runSagaListeners();

  return store;
}

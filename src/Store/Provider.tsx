import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { setMiddleware } from './Middleware';
import { reducers } from './Reducers';
import { IStoreProps, DefaultStoreProps} from './Interfaces';

interface IProps {
  storeProps?: IStoreProps;
  children: React.ReactNode;
}

const StoreProvider: React.FC<IProps> = (props) => {
  function initStore(): Store {
    const storeProps = props.storeProps || DefaultStoreProps;
    
    const middleware = setMiddleware(storeProps);
    const store = createStore(reducers, middleware);
    // runSagaListeners();
  
    return store;
  } 
  
  return (
    <Provider store={initStore()}>
      {props.children}
    </Provider>
  );
}

export default StoreProvider;

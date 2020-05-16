import { applyMiddleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { IStoreProps} from './Interfaces';

export const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

export const setMiddleware = (props: IStoreProps): StoreEnhancer => {
  let middleware = applyMiddleware(sagaMiddleware);
  if (props.env === 'dev') {
    middleware = composeWithDevTools(middleware);
  }

  return middleware;
}

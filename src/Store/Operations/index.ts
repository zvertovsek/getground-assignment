import { sagaMiddleware } from '~/Store';
import { Saga } from 'redux-saga';

import { Listener as Shareholders } from './Shareholders';

const listneres: Saga[] = [
  Shareholders
];

export function startListeners() {
  listneres.forEach((listener: Saga) => sagaMiddleware.run(listener))
};
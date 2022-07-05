import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './modules';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['user'],
};

// eslint-disable-next-line
export default (preloadedState = {}) => {
  const middlewares = [thunk, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  const rootReducer = createRootReducer(history);
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false,
        })
      : compose;

  const store = createStore(persistedReducer, preloadedState, composeEnhancers(...enhancers));
  const persistor = persistStore(store);

  return { store, persistor };
};
